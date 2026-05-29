"use client";

import { useUser } from "@clerk/nextjs";

type Plan = {
  id: string;
  name: string;
  price: string;
  credits: number;
  benefits: string[];
  badge?: string | null;
};

type Props = {
  plan: Plan;
};

export default function PricingCard({ plan }: Props) {
  const { user, isLoaded } = useUser();

  const isPopular = plan.name.includes("Creator");

  async function handleBuy() {
    try {
      if (!isLoaded || !user) {
        alert("Please login first");
        return;
      }

      const clerkId = user.id; // ✅ REAL ID

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: plan.id,
          userId: clerkId, // ✅ send real Clerk ID
        }),
      });

      const data = await res.json();

      const checkoutUrl = data?.data?.url || data?.url;

      if (!checkoutUrl) {
        throw new Error("No checkout URL returned");
      }

      window.location.href = checkoutUrl;
    } catch (err) {
      console.error(err);
      alert("Payment failed, try again");
    }
  }


  return (
    <div
    className={`p-6 rounded-2xl border ${
      isPopular
        ? "border-blue-500 bg-[#151922]"
        : "border-[#2a2f3a] bg-[#1a1d22]"
    }`}
  >
    <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
  
    <p className="text-3xl font-bold mb-4">
      ${plan.price}
      <span className="text-sm text-gray-400"> / one-time payment</span>
    </p>
  
    <button
      onClick={handleBuy}
      className={`w-full py-2 rounded-lg font-medium ${
        isPopular
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-700 hover:bg-gray-600"
      }`}
    >
      Buy {plan.credits} Credits
    </button>
  
    {/* 👇 BENEFITS */}
    <ul className="mt-4 space-y-2">
      {plan.benefits?.map((benefit, index) => (
        <li
          key={index}
          className="text-sm text-gray-300 flex items-start gap-2"
        >
          <span className="text-green-400">✓</span>
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  
    {plan.badge && (
      <div className="mt-3 text-xs text-blue-400 text-center">
        {plan.badge}
      </div>
    )}
  </div>
  );
}
