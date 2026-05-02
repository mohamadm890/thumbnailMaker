import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import { createThumbnail } from "@/server/thumbnail/createThumbnail";

import { success, z } from "zod";
import { buildThumbnailPrompt } from "@/lib/ai/thumbnailPrompt";
import { generateNanoBananaImage } from "@/lib/ai";
import { uploadImage } from "@/lib/storage/cloudinary";

export const maxDuration = 60;
// Move validation outside the handler
const BodySchema = z.object({
  action: z.string().min(3).max(500),

  emotions: z.array(z.string()).min(1), // at least 1 chip

  focus: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    // 1. Auth & Validation
    const { userId: clerkId } = await auth();
    if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const validation = BodySchema.safeParse(body);
    if (!validation.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    const form = validation.data;
    const fullPrompt = buildThumbnailPrompt(form);

    // 2. PRE-CHECK: Check user existence and credits (NO TRANSACTION YET)
    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true, credits: true }
    });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    if (user.credits <= 0) return NextResponse.json({ error: "No credits" }, { status: 403 });

  

    // 3. THE HEAVY LIFTING: Run outside the transaction
    if (!fullPrompt) throw new Error("PROMPT_BUILD_FAILED");
    
    // AI Generation (takes ~15s)
    const thumbnail = await generateNanoBananaImage(fullPrompt);
    if (!thumbnail) throw new Error("IMAGE_GENERATION_FAILED");

    // Upload to Cloudinary (takes ~1-2s)
    const imageUrl = await uploadImage(thumbnail);
    if (!imageUrl) throw new Error("IMAGE_UPLOAD_FAILED");

    // 4. THE FINISH LINE: Fast DB updates in a transaction
    // This will now take milliseconds, well under the 5s timeout.
    await prisma.$transaction(async (tx) => {
      // Re-verify credits inside transaction for race-condition safety
      const latestUser = await tx.user.update({
        where: { id: user.id },
        data: { credits: { decrement: 1 } },
      });

      // If decrement resulted in negative, the DB constraints (if any) or logic would fail here
      if (latestUser.credits < 0) throw new Error("INSUFFICIENT_CREDITS");

      return await tx.thumbnail.create({
        data: {
          userId: user.id,
          prompt: form.action,
          imageUrl,
        },
      });
    });

    return NextResponse.json({ success: true, image: imageUrl });

  } catch (error: any) {
    console.error("[THUMBNAIL_POST]:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}