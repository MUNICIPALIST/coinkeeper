import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

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

// GET /api/goals/[id] - Get a specific goal by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Parse goalId as integer and validate
    const goalId = parseInt(params.id);
    if (isNaN(goalId)) {
      console.error('Invalid goal ID:', params.id);
      return NextResponse.json(
        { error: 'Invalid goal ID' },
        { status: 400 }
      );
    }

    console.log(`Fetching goal ${goalId} for user ${userId}`);

    const goal = await prisma.goal.findFirst({
      where: {
        id: goalId,
        userId: userId, // Explicitly use the parsed integer userId
        deletedAt: null,
      },
    });

    if (!goal) {
      return NextResponse.json(
        { error: 'Goal not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(goal);
  } catch (error) {
    console.error('Error fetching goal:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// DELETE /api/goals/[id] - Soft delete a goal (mark as deleted)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Parse goalId as integer and validate
    const goalId = parseInt(params.id);
    if (isNaN(goalId)) {
      console.error('Invalid goal ID:', params.id);
      return NextResponse.json(
        { error: 'Invalid goal ID' },
        { status: 400 }
      );
    }

    console.log(`Attempting to delete goal ${goalId} for user ${userId}`);

    // Check if the goal belongs to the user
    const goal = await prisma.goal.findFirst({
      where: {
        id: goalId,
        userId: userId, // Explicitly use the parsed integer userId
        deletedAt: null,
      },
    });

    if (!goal) {
      return NextResponse.json(
        { error: 'Goal not found' },
        { status: 404 }
      );
    }

    // Soft delete by setting deletedAt field
    const deletedGoal = await prisma.goal.update({
      where: { id: goalId },
      data: { deletedAt: new Date() },
    });

    console.log(`Successfully deleted goal ${goalId}`);
    return NextResponse.json({ success: true, id: deletedGoal.id });
  } catch (error) {
    console.error('Error deleting goal:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 