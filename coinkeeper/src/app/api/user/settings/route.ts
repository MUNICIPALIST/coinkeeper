import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/user/settings - Get user settings
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Get user data (excluding password)
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Here you would typically fetch user preferences from a separate table
    // For demonstration, we'll return mock preferences
    const preferences = {
      theme: 'light',
      currency: 'USD',
      dateFormat: 'MM/DD/YYYY',
      notifications: true,
    };

    return NextResponse.json({
      user,
      preferences,
    });
  } catch (error) {
    console.error('Error fetching user settings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/user/settings - Update user settings
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const { profile, preferences } = await request.json();

    // Update user profile if provided
    if (profile) {
      await prisma.user.update({
        where: {
          id: parseInt(userId),
        },
        data: {
          username: profile.username,
          // Only update email if it changed
          ...(profile.email !== session.user.email && { email: profile.email }),
        },
      });
    }

    // Here you would typically update user preferences in a separate table
    // For demonstration, we'll return success

    return NextResponse.json({
      success: true,
      message: 'Settings updated successfully',
    });
  } catch (error) {
    console.error('Error updating user settings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 