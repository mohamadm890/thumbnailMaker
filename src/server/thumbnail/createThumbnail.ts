import { prisma } from "../../lib/db/prisma";
import {Thumbnail} from "../../../types/thumbnail";


export async function createThumbnail(thumbnail: Thumbnail) {
    await prisma.thumbnail.create({
      data: {
        id: thumbnail.id,
        userId: thumbnail.userId,
        prompt: thumbnail.prompt,
        imageUrl: thumbnail.imageUrl,
        createdAt: new Date(),
      },
    });
  }