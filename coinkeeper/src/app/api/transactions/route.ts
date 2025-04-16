import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { PrismaClient, Prisma } from '@prisma/client';

// Define a proper type for the transaction client
type PrismaTransaction = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>;

// GET /api/transactions - Get all transactions for the current user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const { searchParams } = new URL(request.url);
    const accountId = searchParams.get('accountId');
    const categoryId = searchParams.get('categoryId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build where clause
    const where = {
      userId,
      deletedAt: null,
      ...(accountId && { accountId: parseInt(accountId) }),
      ...(categoryId && { categoryId: parseInt(categoryId) }),
      ...(startDate &&
        endDate && {
          date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        }),
    };

    // Get transactions with pagination
    const transactions = await prisma.transaction.findMany({
      where,
      include: {
        account: true,
        category: true,
      },
      orderBy: {
        date: 'desc',
      },
      skip,
      take: limit,
    });

    // Get total count
    const total = await prisma.transaction.count({ where });

    return NextResponse.json({
      transactions,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/transactions - Create a new transaction
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const data = await request.json();
    const { type, amount, description, date, accountId, categoryId, toAccountId } =
      data;

    // Validate required fields
    if (!type || !amount || !date || !accountId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure valid transaction type
    if (!['income', 'expense', 'transfer'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid transaction type' },
        { status: 400 }
      );
    }

    // Ensure category is provided for income and expense
    if (['income', 'expense'].includes(type) && !categoryId) {
      return NextResponse.json(
        { error: 'Category is required for income and expense transactions' },
        { status: 400 }
      );
    }

    // Ensure toAccountId is provided for transfers
    if (type === 'transfer' && !toAccountId) {
      return NextResponse.json(
        { error: 'Target account is required for transfer transactions' },
        { status: 400 }
      );
    }

    let createdTransaction;

    // Handle transaction logic within a database transaction
    if (type === 'transfer') {
      // Find a transfer category or create one if it doesn't exist
      let transferCategory = await prisma.category.findFirst({
        where: {
          name: 'Transfer',
          type: 'transfer',
          userId: userId,
          deletedAt: null,
        },
      });

      if (!transferCategory) {
        transferCategory = await prisma.category.create({
          data: {
            name: 'Transfer',
            type: 'transfer',
            icon: 'swap_horiz',
            color: '#7986CB',
            userId: userId,
          },
        });
      }

      createdTransaction = await prisma.$transaction(async (tx: PrismaTransaction) => {
        // Create the transaction record
        const transaction = await tx.transaction.create({
          data: {
            type: 'transfer',
            amount,
            description: description || `Transfer to account #${toAccountId}`,
            date: new Date(date),
            accountId,
            categoryId: transferCategory.id,
            userId,
          },
          include: {
            account: true,
            category: true,
          },
        });

        // Update source account balance (decrement)
        await tx.account.update({
          where: { id: accountId },
          data: { balance: { decrement: amount } },
        });

        // Update destination account balance (increment)
        await tx.account.update({
          where: { id: parseInt(toAccountId.toString()) },
          data: { balance: { increment: amount } },
        });

        return transaction;
      });
    } else {
      // Handle income or expense
      createdTransaction = await prisma.$transaction(async (tx: PrismaTransaction) => {
        const transaction = await tx.transaction.create({
          data: {
            type,
            amount,
            description,
            date: new Date(date),
            accountId,
            categoryId,
            userId,
          },
          include: {
            account: true,
            category: true,
          },
        });

        // Update account balance
        await tx.account.update({
          where: { id: accountId },
          data: {
            balance: {
              [type === 'income' ? 'increment' : 'decrement']: amount,
            },
          },
        });

        return transaction;
      });
    }

    return NextResponse.json(createdTransaction, { status: 201 });
  } catch (error) {
    console.error('Error creating transaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/transactions - Update an existing transaction
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const data = await request.json();
    const { id, type, amount, description, date, accountId, categoryId } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Transaction ID is required' },
        { status: 400 }
      );
    }

    // Check if transaction exists and belongs to user
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        id,
        userId,
        deletedAt: null,
      },
      include: {
        account: true,
        category: true,
      },
    });

    if (!existingTransaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Update transaction within a database transaction to ensure consistency
    const updatedTransaction = await prisma.$transaction(async (tx: PrismaTransaction) => {
      // Revert the original transaction effect on account balance
      if (['income', 'expense'].includes(existingTransaction.type)) {
        await tx.account.update({
          where: { id: existingTransaction.accountId },
          data: {
            balance: {
              [existingTransaction.type === 'income' ? 'decrement' : 'increment']:
                existingTransaction.amount,
            },
          },
        });
      }

      // Apply new transaction effect on account balance
      if (['income', 'expense'].includes(type)) {
        await tx.account.update({
          where: { id: accountId },
          data: {
            balance: {
              [type === 'income' ? 'increment' : 'decrement']: amount,
            },
          },
        });
      }

      // Update the transaction
      return tx.transaction.update({
        where: { id },
        data: {
          type,
          amount,
          description,
          date: new Date(date),
          accountId,
          categoryId,
        },
        include: {
          account: true,
          category: true,
        },
      });
    });

    return NextResponse.json(updatedTransaction);
  } catch (error) {
    console.error('Error updating transaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 