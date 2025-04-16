import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

// DELETE /api/transactions/[id] - Soft delete a transaction
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    
    const transactionId = parseInt(params.id);
    if (isNaN(transactionId)) {
      return NextResponse.json({ error: 'Invalid transaction ID' }, { status: 400 });
    }

    // Verify transaction ownership and get details
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        id: transactionId,
        userId,
        deletedAt: null,
      },
      include: {
        account: true,
      },
    });

    if (!existingTransaction) {
      return NextResponse.json(
        { error: 'Transaction not found or unauthorized' },
        { status: 404 }
      );
    }

    // Start a transaction to ensure data consistency
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Revert the transaction's effect on the account balance
      await tx.account.update({
        where: { id: existingTransaction.accountId },
        data: {
          balance: {
            [existingTransaction.type === 'income' ? 'decrement' : 'increment']: existingTransaction.amount,
          },
        },
      });

      // Soft delete the transaction
      await tx.transaction.update({
        where: { id: transactionId },
        data: {
          deletedAt: new Date(),
        },
      });

      // If this is a transfer transaction, handle the related transaction
      if (existingTransaction.type === 'transfer' && existingTransaction.relatedTransactionId) {
        const relatedTransaction = await tx.transaction.findFirst({
          where: {
            id: existingTransaction.relatedTransactionId,
            deletedAt: null,
          },
          include: {
            account: true,
          },
        });

        if (relatedTransaction) {
          // Revert the related transaction's effect on its account
          await tx.account.update({
            where: { id: relatedTransaction.accountId },
            data: {
              balance: {
                decrement: relatedTransaction.amount,
              },
            },
          });

          // Soft delete the related transaction
          await tx.transaction.update({
            where: { id: relatedTransaction.id },
            data: {
              deletedAt: new Date(),
            },
          });
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 