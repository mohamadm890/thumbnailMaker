import { prisma } from "../../lib/db/prisma";
import { CreditTransaction } from "./credits.types";

export async function getUserByClerkId(clerkId: string) {
  return prisma.user.findUnique({
    where: { clerkId },
    select: {
      id: true,
      credits: true,
    },
  });
}


  export async function incrementCredits(userId: string, amount: number) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        credits: { increment: amount }
      }
    });
  }

  export async function decrementCredits(userId: string, amount: number) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        credits: { decrement: amount }
      }
    });
  }

  export async function createTransaction(
    data: CreditTransaction
  ) {
    return prisma.creditTransaction.create({ data });
  }

;
    
  