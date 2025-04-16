import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/settings - Get user settings
export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Get user settings from database
    const userSettings = await prisma.userSettings.findUnique({
      where: {
        userId: userId,
      },
    });

    // If settings exist, return them
    if (userSettings) {
      return NextResponse.json({
        theme: userSettings.theme || 'light',
        currency: userSettings.currency || 'USD',
        language: userSettings.language || 'en',
        dateFormat: userSettings.dateFormat || 'MM/DD/YYYY',
        notifications: userSettings.notifications,
      });
    }

    // If no settings exist, create default settings
    const defaultSettings = {
      theme: 'light',
      currency: 'USD',
      language: 'en',
      dateFormat: 'MM/DD/YYYY',
      notifications: true,
    };

    // Create default settings in database
    await prisma.userSettings.create({
      data: {
        ...defaultSettings,
        userId: userId,
      },
    });

    return NextResponse.json(defaultSettings);
  } catch (error) {
    console.error('Error fetching user settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PUT /api/settings - Update user settings
export async function PUT(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Get settings from request body
    const data = await request.json();
    const { theme, currency, language, dateFormat, notifications } = data;

    // Validate settings
    if (!theme || !currency || !language || !dateFormat) {
      return NextResponse.json(
        { error: 'Missing required settings' },
        { status: 400 }
      );
    }

    // Check if settings exist
    const existingSettings = await prisma.userSettings.findUnique({
      where: {
        userId: userId,
      },
    });

    let updatedSettings;

    if (existingSettings) {
      // Update existing settings
      updatedSettings = await prisma.userSettings.update({
        where: {
          userId: userId,
        },
        data: {
          theme,
          currency,
          language,
          dateFormat,
          notifications,
        },
      });
    } else {
      // Create new settings
      updatedSettings = await prisma.userSettings.create({
        data: {
          theme,
          currency,
          language,
          dateFormat,
          notifications,
          userId: userId,
        },
      });
    }

    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error('Error updating user settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
} 