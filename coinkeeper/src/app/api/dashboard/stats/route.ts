import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

interface Account {
  balance: number;
}

interface Transaction {
  id: number;
  amount: number;
  description: string | null;
  date: Date;
  type: string;
  category: {
    name: string;
  };
}

interface Category {
  id: number;
  name: string;
  color: string | null;
  transactions: Array<{ amount: number }>;
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userIdStr = session.user.id;
    const userId = parseInt(userIdStr);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Get total balance from all accounts
    const accounts = await prisma.account.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      select: {
        balance: true,
      },
    });

    const totalBalance = accounts.reduce((sum: number, account: Account) => sum + account.balance, 0);

    // Get transactions for income and expenses
    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      include: {
        category: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: 5, // Get only recent 5 transactions
    });

    // Calculate totals
    const totalIncome = transactions
      .filter((t: Transaction) => t.type === 'income')
      .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter((t: Transaction) => t.type === 'expense')
      .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

    // Get expenses by category
    const categories = await prisma.category.findMany({
      where: {
        userId,
        type: 'expense',
        deletedAt: null,
      },
      include: {
        transactions: {
          where: {
            type: 'expense',
            deletedAt: null,
          },
        },
      },
    });

    const expensesByCategory = {
      labels: categories.map((c: Category) => c.name),
      data: categories.map((c: Category) => 
        c.transactions.reduce((sum: number, t: { amount: number }) => sum + t.amount, 0)
      ),
      backgroundColor: categories.map((c: Category) => c.color || '#000000'),
    };

    // Format recent transactions
    const recentTransactions = transactions.map((t: Transaction) => ({
      id: t.id,
      description: t.description,
      amount: t.amount,
      type: t.type,
      category: t.category.name,
      date: t.date,
    }));

    return NextResponse.json({
      totalBalance,
      totalIncome,
      totalExpenses,
      expensesByCategory,
      recentTransactions,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 