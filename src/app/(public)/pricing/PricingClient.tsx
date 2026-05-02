"use client";

import { useState } from "react";
import PricingGrid from "@/components/pricing/PricingGrid";
import { useUser } from "@clerk/nextjs";

type Plan = {
  id: string;
  name?: string;
  price?: number;
  [key: string]: any;
};

type Props = {
  plans: Plan[];
};

export default function PricingClient({ plans }: Props) {
  const { user, isSignedIn } = useUser();

  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleBuy(productId: string) {
    try {
      setLoadingId(productId);

      if (!isSignedIn || !user?.id) {
        window.location.href = "/sign-in";
        return;
      }

      const clerkId = user.id;

      window.location.href = `/api/checkout?products=${productId}&customerExternalId=${clerkId}`;
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 pb-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        Choose your plan
      </h1>

      <PricingGrid
        plans={plans}
        onBuy={handleBuy}
        
      />
    </div>
  );
}