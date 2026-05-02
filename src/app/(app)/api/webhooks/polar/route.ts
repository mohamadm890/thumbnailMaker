
import { createTransaction, incrementCredits, getUserByClerkId } from "@/server/credits/credits.repository";
import { Webhooks } from "@polar-sh/nextjs";


export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  onOrderPaid: async (payload) => {
   
    try {
      const clerkId = await payload.data.customer?.externalId;
      const thumbnails = Number(
        payload.data.product?.metadata?.thumbnails ?? 0
      );

      if (!clerkId) {
        console.log("Missing externalId");
        return;
      }
  
      // 1. ensure user exists
      const user = await getUserByClerkId(clerkId);
  
      if (!user) {
        console.log("User not found:", clerkId);
        return;
      }
  
      // 2. update credits
      await incrementCredits(user.id, thumbnails);
  
      // 3. log transaction
      if (!user) {
        console.log("User not found:", clerkId);
        return;
      }
  
      createTransaction({
        userId: user.id,
        type: "ADD",
        amount: thumbnails,
        createdAt: new Date()
        })
  
      console.log("Payment success:", clerkId);
    } catch(error) {
      console.log("Payment failed:", error);

    }

    
    console.log("Payment success This:", payload.data.customer.externalId);

  },
});