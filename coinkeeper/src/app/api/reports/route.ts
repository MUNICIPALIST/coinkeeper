import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { addDays, subDays, format, parseISO, startOfMonth, endOfMonth } from 'date-fns';

interface Transaction {
  id: number;
  amount: number;
  type: string;
  date: Date;
  category?: {
    name: string;
  };
}

interface DailySummary {
  date: string;
  income: number;
  expense: number;
  net: number;
}

interface CategorySummary {
  name: string;
  amount: number;
  percentage: number;
}

interface MonthlyComparison {
  month: string;
  income: number;
  expense: number;
  savings: number;
  savingsRate: number;
}

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date | null;
  description: string | null;
  status: string;
  progress: number;
  daysLeft: number | null;
}

// GET /api/reports - Get financial analytics data
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = new URL(request.url).searchParams;
    const timeRange = parseInt(searchParams.get('timeRange') || '30');
    const userId = parseInt(session.user.id);

    const endDate = new Date();
    const startDate = subDays(endDate, timeRange);

    // Fetch transactions for the time range
    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Calculate daily summaries
    const dailySummary: DailySummary[] = transactions.reduce((acc: DailySummary[], transaction) => {
      const date = format(transaction.date, 'yyyy-MM-dd');
      const existing = acc.find(item => item.date === date);

      if (existing) {
        if (transaction.type === 'income') {
          existing.income += transaction.amount;
        } else {
          existing.expense += transaction.amount;
        }
        existing.net = existing.income - existing.expense;
      } else {
        acc.push({
          date,
          income: transaction.type === 'income' ? transaction.amount : 0,
          expense: transaction.type === 'expense' ? transaction.amount : 0,
          net: transaction.type === 'income' ? transaction.amount : -transaction.amount,
        });
      }

      return acc;
    }, []);

    // Calculate category summaries
    const categoryTotals = transactions.reduce<Record<string, number>>((acc, transaction) => {
      const categoryName = transaction.category.name;
      if (transaction.type === 'expense') {
        acc[categoryName] = (acc[categoryName] || 0) + transaction.amount;
      }
      return acc;
    }, {});

    const totalExpenses = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

    const categorySummary: CategorySummary[] = Object.entries(categoryTotals).map(([name, amount]) => ({
      name,
      amount,
      percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0,
    }));

    // Calculate monthly comparisons
    const monthlyComparison: MonthlyComparison[] = [];
    let currentDate = startOfMonth(startDate);
    const endOfPeriod = endOfMonth(endDate);

    while (currentDate <= endOfPeriod) {
      const monthEnd = endOfMonth(currentDate);
      const monthTransactions = transactions.filter(
        t => t.date >= currentDate && t.date <= monthEnd
      );

      const monthIncome = monthTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

      const monthExpense = monthTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

      const savings = monthIncome - monthExpense;
      const savingsRate = monthIncome > 0 ? (savings / monthIncome) * 100 : 0;

      monthlyComparison.push({
        month: format(currentDate, 'MMM yyyy'),
        income: monthIncome,
        expense: monthExpense,
        savings,
        savingsRate,
      });

      currentDate = addDays(monthEnd, 1);
    }

    // Fetch goals
    const goals = await prisma.goal.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        targetAmount: true,
        currentAmount: true,
        deadline: true,
        description: true,
        status: true,
      },
    });

    // Calculate goal progress
    const goalsWithProgress: Goal[] = goals.map(goal => {
      const progress = (goal.currentAmount / goal.targetAmount) * 100;
      const daysLeft = goal.deadline ? Math.ceil((parseISO(goal.deadline.toString()).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

      return {
        ...goal,
        progress,
        daysLeft,
      };
    });

    return NextResponse.json({
      dailySummary,
      categorySummary,
      monthlyComparison,
      goals: goalsWithProgress,
    });
  } catch (error) {
    console.error('Error in reports API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 