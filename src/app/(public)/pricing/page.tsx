import { PLANS_FULL } from "@/lib/plans/plans";
import PricingClient from "./PricingClient";


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

export default async function PricingPage() {

  

  const res = await fetch(`${process.env.API_URL}/api/products`, {
    cache: "no-store", // always fresh (optional)
  });

  const data = await res.json();
 


  const plans: Plan[] = normalizePaddleProducts(data.data);

    
  return <PricingClient plans={plans} />;
}

export function normalizePaddleProducts(data: { prices: any[]; custom_data: { benefits: string; credits: any; }; id: any; name: any; description: any; status: any; created_at: any; updated_at: any; }[]) {
  const normalized = data.map((product: { prices: any[]; custom_data: { benefits: string; credits: any; }; id: any; name: any; description: any; status: any; created_at: any; updated_at: any; }) => {
    const price = product.prices?.[0];

    let benefits = [];
    try {
      benefits = product.custom_data?.benefits
        ? JSON.parse(product.custom_data.benefits)
        : [];
    } catch (e) {
      benefits = [];
    }

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      status: product.status,

      price: price
        ? Number(price.unit_price.amount) / 100
        : 0,

      currency: price?.unit_price?.currency_code || "USD",

      credits: product.custom_data?.credits
        ? Number(product.custom_data.credits)
        : 0,

      benefits,

      createdAt: product.created_at,
      updatedAt: product.updated_at,
    };
  });

  // 👇 SORT HERE (40 → 100 → 200)
  return normalized.sort((a, b) => a.credits - b.credits);
}
