"use client";

type Plan = {
  id: string;
  name: string;
  price: string; // from PLANS_FULL
  credits: number;
  benefits: string[];
  badge?: string | null;
};

type Props = {
  plan: Plan;
  clerkId: string;
};

export default function PricingCard({ plan, clerkId }: Props) {
  const isPopular = plan.name.includes("Creator");

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
        ${plan.price}
        <span className="text-sm text-gray-400">
          {" "} / one-time payment
        </span>
      </p>

      {/* FEATURES */}
      <ul className="text-sm space-y-2 mb-6">
        {plan.benefits.map((b, i) => (
          <li key={i}>✔ {b}</li>
        ))}
      </ul>

      {/* PAYPAL BUTTON */}
      <button
        onClick={async () => {
          // call backend to start PayPal order
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            body: JSON.stringify({
              planId: plan.id,
              clerkId,
            }),
          });

          const data = await res.json();

          // redirect user to PayPal approval link
          if (data.approvalUrl) {
            window.location.href = data.approvalUrl;
          }
        }}
        className={`w-full py-2 rounded-lg font-medium ${
          isPopular
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Buy {plan.credits} Credits
      </button>

      {/* BADGE */}
      {plan.badge && (
        <div className="mt-3 text-xs text-blue-400 text-center">
          {plan.badge}
        </div>
      )}
    </div>
  );
}
