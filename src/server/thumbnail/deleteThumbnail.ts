import { prisma } from "../../lib/db/prisma";

export async function deleteThumbnail(id: string) {
  return prisma.thumbnail.delete({
    where: {
      id,
    },
  });
}