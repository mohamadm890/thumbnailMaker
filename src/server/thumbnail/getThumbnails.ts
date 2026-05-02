import { prisma } from "../../lib/db/prisma";

export async function getThumbnails(userId: string) {
  return prisma.thumbnail.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}