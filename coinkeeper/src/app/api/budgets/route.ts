import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/budgets - Get all budgets for the current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Get all active budgets
    const budgets = await prisma.budget.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
          },
        },
      },
    });

    // Calculate spent amounts for each budget
    const budgetsWithSpent = await Promise.all(
      budgets.map(async (budget) => {
        const startDate = budget.period === 'monthly' ? startOfMonth : startOfYear;

        const spent = await prisma.transaction.aggregate({
          where: {
            userId,
            categoryId: budget.categoryId,
            type: 'expense',
            date: {
              gte: startDate,
            },
            deletedAt: null,
          },
          _sum: {
            amount: true,
          },
        });

        return {
          ...budget,
          spent: spent._sum.amount || 0,
        };
      })
    );

    return NextResponse.json(budgetsWithSpent);
  } catch (error) {
    console.error('Error fetching budgets:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/budgets - Create a new budget
export async function POST(request: Request) {
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
    console.log('Budget creation data:', data);

    const { name, amount, period, categoryId } = data;

    // Validate required fields
    if (!amount || !period || !categoryId) {
      return NextResponse.json(
        { error: 'Missing required fields', 
          received: { name, amount, period, categoryId } 
        },
        { status: 400 }
      );
    }

    // Calculate start and end dates based on period
    const now = new Date();
    let startDate, endDate;
    
    if (period === 'monthly') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    } else if (period === 'yearly') {
      startDate = new Date(now.getFullYear(), 0, 1);
      endDate = new Date(now.getFullYear(), 11, 31);
    } else {
      return NextResponse.json(
        { error: 'Invalid period. Must be "monthly" or "yearly"' },
        { status: 400 }
      );
    }

    // Check if a budget already exists for this category and period
    const existingBudget = await prisma.budget.findFirst({
      where: {
        userId,
        categoryId: parseInt(categoryId.toString()),
        period,
        deletedAt: null,
      },
    });

    if (existingBudget) {
      return NextResponse.json(
        { error: 'A budget already exists for this category and period' },
        { status: 400 }
      );
    }

    const budget = await prisma.budget.create({
      data: {
        amount: parseFloat(amount.toString()),
        period,
        startDate,
        endDate,
        categoryId: parseInt(categoryId.toString()),
        userId,
        name: name || undefined, // Handle optional name field
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
          },
        },
      },
    });

    return NextResponse.json(budget);
  } catch (error) {
    console.error('Error creating budget:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/budgets - Update an existing budget
export async function PUT(request: Request) {
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
    console.log('Budget update data:', data);
    
    const { id, name, amount, period, categoryId } = data;

    // Validate required fields
    if (!id || !amount || !period || !categoryId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify budget ownership
    const existingBudget = await prisma.budget.findFirst({
      where: {
        id,
        userId,
        deletedAt: null,
      },
    });

    if (!existingBudget) {
      return NextResponse.json(
        { error: 'Budget not found or unauthorized' },
        { status: 404 }
      );
    }

    // Calculate start and end dates based on period
    const now = new Date();
    let startDate, endDate;
    
    if (period === 'monthly') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    } else if (period === 'yearly') {
      startDate = new Date(now.getFullYear(), 0, 1);
      endDate = new Date(now.getFullYear(), 11, 31);
    } else {
      return NextResponse.json(
        { error: 'Invalid period. Must be "monthly" or "yearly"' },
        { status: 400 }
      );
    }

    // Check if updating would create a duplicate
    if (
      categoryId !== existingBudget.categoryId ||
      period !== existingBudget.period
    ) {
      const duplicateBudget = await prisma.budget.findFirst({
        where: {
          userId,
          categoryId: parseInt(categoryId.toString()),
          period,
          deletedAt: null,
          NOT: {
            id,
          },
        },
      });

      if (duplicateBudget) {
        return NextResponse.json(
          { error: 'A budget already exists for this category and period' },
          { status: 400 }
        );
      }
    }

    const budget = await prisma.budget.update({
      where: { id },
      data: {
        amount: parseFloat(amount.toString()),
        period,
        startDate,
        endDate,
        categoryId: parseInt(categoryId.toString()),
        name: name || undefined,
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
          },
        },
      },
    });

    return NextResponse.json(budget);
  } catch (error) {
    console.error('Error updating budget:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 