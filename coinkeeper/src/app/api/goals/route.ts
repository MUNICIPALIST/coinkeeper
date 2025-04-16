import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

interface GoalRequest {
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  description?: string;
}

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  status: string;
  description: string | null;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

// GET /api/goals - Get all goals for the current user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Parse userId as integer and validate
    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      console.error('Invalid user ID:', session.user.id);
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    console.log('Fetching goals for userId:', userId, typeof userId);

    const goals = await prisma.goal.findMany({
      where: {
        userId: userId, // Explicitly use the parsed integer userId
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Found goals:', goals ? goals.length : 0);

    // Update status based on deadline and progress
    const updatedGoals = goals.map((goal) => {
      const deadlineDate = goal.deadline;
      const today = new Date();
      const progress = (goal.currentAmount / goal.targetAmount) * 100;
      
      let status = goal.status;
      
      // Update status based on progress and deadline
      if (progress >= 100) {
        status = 'completed';
      } else if (deadlineDate && deadlineDate < today) {
        status = 'expired';
      } else if (deadlineDate && deadlineDate.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000) {
        // Less than 7 days remaining
        status = 'at_risk';
      } else {
        status = 'in_progress';
      }

      return {
        ...goal,
        status,
      };
    });

    return NextResponse.json(updatedGoals);
  } catch (error) {
    console.error('Error fetching goals:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// POST /api/goals - Create a new goal
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      console.error('Invalid user ID:', session.user.id);
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const goal: GoalRequest = await request.json();
    console.log('Creating goal with userId:', userId, typeof userId);

    const newGoal = await prisma.goal.create({
      data: {
        name: goal.name,
        targetAmount: goal.targetAmount,
        currentAmount: goal.currentAmount || 0,
        deadline: new Date(goal.deadline),
        description: goal.description || null,
        status: 'in_progress',
        userId: userId, // Explicitly use the parsed integer userId
      },
    });

    return NextResponse.json(newGoal);
  } catch (error) {
    console.error('Error creating goal:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/goals - Update an existing goal
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      console.error('Invalid user ID:', session.user.id);
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const { id, ...goalData }: { id: number } & GoalRequest = await request.json();
    console.log('Updating goal with ID:', id, 'for userId:', userId, typeof userId);

    // Check if the goal exists and belongs to the user
    const existingGoal = await prisma.goal.findFirst({
      where: {
        id,
        userId: userId, // Explicitly use the parsed integer userId
        deletedAt: null,
      },
    });

    if (!existingGoal) {
      return NextResponse.json(
        { error: 'Goal not found' },
        { status: 404 }
      );
    }

    // Calculate progress and status
    const deadlineDate = new Date(goalData.deadline);
    const today = new Date();
    const progress = (goalData.currentAmount / goalData.targetAmount) * 100;
    
    let status = existingGoal.status;
    
    if (progress >= 100) {
      status = 'completed';
    } else if (deadlineDate && deadlineDate < today) {
      status = 'expired';
    } else if (deadlineDate && deadlineDate.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000) {
      status = 'at_risk';
    } else {
      status = 'in_progress';
    }

    // Update the goal
    const updatedGoal = await prisma.goal.update({
      where: { id },
      data: {
        name: goalData.name,
        targetAmount: goalData.targetAmount,
        currentAmount: goalData.currentAmount,
        deadline: deadlineDate,
        description: goalData.description,
        status,
      },
    });

    return NextResponse.json(updatedGoal);
  } catch (error) {
    console.error('Error updating goal:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 