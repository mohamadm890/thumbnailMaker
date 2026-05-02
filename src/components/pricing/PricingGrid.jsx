"use client";
import PricingCard from "./PricingCard";

export default function PricingGrid({ plans, onBuy }) {
    const activePlans = plans.filter((item) => !item.is_archived);
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {activePlans.map(plan => (
        <PricingCard
          key={plan.id}
          plan={plan}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}