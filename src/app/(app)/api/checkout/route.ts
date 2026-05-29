import { NextResponse } from "next/server";
import { Paddle } from "@paddle/paddle-node-sdk";

const paddle = new Paddle(process.env.PADDLE_API_KEY!)

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, userId } = body; 

  

    let finalPriceId = priceId;

    if (priceId.startsWith("pro_")) {
      
      // List prices associated with this product ID
      const pricesPager = paddle.prices.list({ productId: priceId });
      const prices = await pricesPager.next();
      
      if (!prices || prices.length === 0) {
        return NextResponse.json({ error: "No prices found for this product ID" }, { status: 400 });
      }
      
      // Grab the first active price ID (starts with pri_)
      finalPriceId = prices[0].id;
      console.log(`Found matching Price ID: ${finalPriceId}`);
    }

    // Now create the transaction with a guaranteed 'pri_' ID
    const transaction = await paddle.transactions.create({
      items: [
        {
          priceId: finalPriceId, 
          quantity: 1,   
        },
      ],
      // Best practice: Pass your userId into custom_data so you can track it via webhooks later
      collectionMode: "automatic",
      customData: {
        userId,
      },
    });

    console.log("transaction +++++", transaction);

    if (!transaction.checkout) {
      return NextResponse.json(
        { error: "Transaction creation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: transaction.checkout.url, 
    });

  } catch (error: any) {
    console.error("Paddle Checkout Error:", error);
    return NextResponse.json(
      { error: error.message || "Checkout creation failed" },
      { status: 500 }
    );
  }
}
