"use client";

type Plan = {
  id: string;
  name: string;
  is_archived?: boolean;
  benefits?: string[];
  prices?: {
    price_amount: number;
  }[];
};

type Props = {
  plan: Plan;
  onBuy: (id: string) => void;
};

export default function PricingCard({ plan, onBuy }: Props) {
  const isPopular = plan.name.includes("Creator");

  const price = plan.prices?.[0]?.price_amount ?? 0;

  return (
    <div
      className={`p-6 rounded-2xl border ${
        isPopular
          ? "border-blue-500 bg-[#151922]"
          : "border-[#2a2f3a] bg-[#1a1d22]"
      }`}
    >
      {/* PLAN NAME */}
      <h2 className="text-xl font-semibold mb-2">
        {plan.name}
      </h2>

      {/* PRICE */}
      <p className="text-3xl font-bold mb-4">
        ${price / 100}
        <span className="text-sm text-gray-400">
          {" "} / one-time payment
        </span>
      </p>

      {/* FEATURES */}
      <ul className="text-sm space-y-2 mb-6">
        {(plan.benefits ?? []).map((b, i) => (
          <li key={i}>✔ {b}</li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => onBuy(plan.id)}
        className={`w-full py-2 rounded-lg font-medium ${
          isPopular
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Get Started
      </button>

      {/* POPULAR TAG */}
      {isPopular && (
        <div className="mt-3 text-xs text-blue-400 text-center">
          Most Popular
        </div>
      )}
    </div>
  );
}