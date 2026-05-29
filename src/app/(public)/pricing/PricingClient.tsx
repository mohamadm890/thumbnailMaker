"use client";

import PricingGrid from "@/components/pricing/PricingGrid";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  initializePaddle,
  type Paddle,
} from "@paddle/paddle-js";




export type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  credits: number;
  benefits: string[];
  createdAt: string;
  updatedAt: string;
};

type Props = {
  plans: Plan[];
};

export default function PricingClient({ plans }: Props) {
  const { user, isSignedIn } = useUser();

  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [paddle, setPaddle] = useState<Paddle | null>(null)

  const [loadingPayment, setLoadingPayment] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoadingPayment(true);

      try {
        const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_KEY;

if (!token) {
  throw new Error("Missing PADDLE_CLIENT_KEY in env");
}

const paddleInstance = await initializePaddle({
  token,
  checkout: {
    settings: {
      theme: "dark",
      successUrl: `${process.env.API_URL}/generate`,
    },
  },
});
   

        setPaddle(paddleInstance ?? null);

        // 2. Read transaction
        const params = new URLSearchParams(window.location.search);
        const txn = params.get("_ptxn");

        console.log("txn:", txn);

        // 3. Open checkout if exists
        if (txn && paddleInstance) {
          // small UX delay (feels smoother)
          setTimeout(() => {
            paddleInstance.Checkout.open({
              transactionId: txn,
            });

            setLoadingPayment(false); // IMPORTANT
          }, 600);
        } else {
          setLoadingPayment(false);
        }
      } catch (error) {
        console.error("Paddle init error:", error);
        setLoadingPayment(false);
      }
    };

    init();
  }, []);




  async function handleBuy() {
    try {
     
  
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: "pro_01kr6txdzbf1eygeh2j37xg0eq", // 👈 your Paddle price ID
          userId: 'user.id',
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Checkout failed");
      }
  
      const checkoutUrl = data?.data?.url || data?.url;
  
      if (!checkoutUrl) {
        throw new Error("No checkout URL returned");
      }
  
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error(err);
      alert("Payment failed, try again");
    } finally {
      setLoadingId(null);
    }
  }
  

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 pb-24 relative">
  
      {/* MAIN CONTENT */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">
          Choose your plan
        </h1>
  
        <p className="text-gray-400 max-w-md mx-auto">
          Pick a plan based on how many thumbnails you need.
        </p>
      </div>
  
      <PricingGrid
        plans={plans}
        onBuy={handleBuy}
      />
  
      {/* LOADING OVERLAY */}
      {loadingPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 overflow-hidden">
  
          {/* Glow background */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
  
          {/* Loader content */}
          <div className="text-center relative z-10">
            <div className="relative mx-auto mb-4 w-14 h-14">
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin" />
            </div>
  
            <p className="text-white text-sm tracking-wide opacity-80">
              Securing your payment
            </p>
  
            <p className="text-white/50 text-xs mt-1">
              Please wait a few seconds...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
