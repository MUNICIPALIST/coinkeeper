import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email or username already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Create default categories for the user
    const defaultCategories = [
      { name: 'salary', type: 'income', icon: '💰', color: '#4CAF50' },
      { name: 'investments', type: 'income', icon: '📈', color: '#2196F3' },
      { name: 'gifts', type: 'income', icon: '🎁', color: '#9C27B0' },
      { name: 'food_dining', type: 'expense', icon: '🍔', color: '#F44336' },
      { name: 'transportation', type: 'expense', icon: '🚗', color: '#FF9800' },
      { name: 'housing', type: 'expense', icon: '🏠', color: '#795548' },
      { name: 'utilities', type: 'expense', icon: '💡', color: '#607D8B' },
      { name: 'shopping', type: 'expense', icon: '🛍️', color: '#E91E63' },
      { name: 'entertainment', type: 'expense', icon: '🎬', color: '#673AB7' },
      { name: 'health', type: 'expense', icon: '💊', color: '#00BCD4' },
      { name: 'education', type: 'expense', icon: '📚', color: '#3F51B5' },
      { name: 'personal_care', type: 'expense', icon: '🧴', color: '#8BC34A' },
      { name: 'travel', type: 'expense', icon: '✈️', color: '#FF5722' },
      { name: 'debt_payments', type: 'expense', icon: '💳', color: '#9E9E9E' },
      { name: 'other', type: 'expense', icon: '❓', color: '#BDBDBD' },
    ];

    await prisma.category.createMany({
      data: defaultCategories.map(category => ({
        ...category,
        userId: user.id,
      })),
    });

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 