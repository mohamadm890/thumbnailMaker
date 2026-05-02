import { prisma } from "../../lib/db/prisma";

export async function getUser(clerkId: string) {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
  });
}