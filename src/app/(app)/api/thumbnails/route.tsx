import { prisma } from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
    const { userId: clerkId } = await auth();
  
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
    // 1. find user in DB
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
  
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  
    // 2. get thumbnails using DB user.id
    const thumbnails = await prisma.thumbnail.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
  
    return NextResponse.json(thumbnails);
  }