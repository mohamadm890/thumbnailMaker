import { prisma } from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { deleteImage } from "@/lib/storage/cloudinary";
import { extractPublicId } from "@/lib/storage/utils";




export async function DELETE(request: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
  const { userId: clerkId } = await auth();

 console.log("clerkId", clerkId);

  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { id } = await params; // 👈 IMPORTANT

  console.log("Id is", id)

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  // 🔐 IMPORTANT: make sure user owns the thumbnail
  const thumbnail = await prisma.thumbnail.findUnique({
    where: { id },
  });


  if (!thumbnail || thumbnail.userId !== user.id) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

 
 if(thumbnail.imageUrl) {

  const publicId = extractPublicId(thumbnail.imageUrl);
 if(!publicId) {
  return NextResponse.json({ error: "Failed to extract publicId" }, { status: 500 });
 }
  deleteImage(publicId);
 }


  await prisma.thumbnail.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}