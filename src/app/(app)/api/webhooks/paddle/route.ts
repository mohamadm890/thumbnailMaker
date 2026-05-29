// app/api/paddle/webhook/route.ts

import { createTransaction, getUserByClerkId,getAllUsers, incrementCredits } from "@/server/credits/credits.repository";
import { NextResponse } from "next/server";






export async function POST(req: Request) {
  const body = await req.json();

  const eventType = body.event_type;


  if (eventType === "transaction.completed") {
    const userId = body.data.custom_data?.userId;
    const transactionId = body.data.id;
  
    const lineItems = body.data.details.line_items;
    const getAllusers = await getAllUsers();

   


    const credits = Number(
        lineItems?.[0]?.product?.custom_data?.credits || 0
      );

       console.log("User:", userId);

       const user = await getUserByClerkId(userId);
        
            if (!user) {
              console.log("User not found:", user);
              return;
            }

      await incrementCredits(userId, credits);
  
      createTransaction({
              userId: user.id,
              type: "ADD",
              amount: credits,
              createdAt: new Date()
              })

  }

  return NextResponse.json({ received: true });
}
