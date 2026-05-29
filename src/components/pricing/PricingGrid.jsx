"use client";
import PricingCard from "./PricingCard";

export default function PricingGrid({ plans, onBuy }) {

  console.log("plans", plans);

  const plansArray = Object.entries(plans).map(([id, plan]) => ({
    id,
    ...plan,
  }));
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plansArray?.map(plan => (
        <PricingCard
          key={plan.id}
          plan={plan}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}
