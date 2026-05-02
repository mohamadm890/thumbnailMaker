import PricingClient from "./PricingClient";

export default async function PricingPage() {

  
  const res = await fetch("https://3000-firebase-ai-thumbnail-1776365387174.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev/api/products", {
    cache: "no-store",
    
  });

  console.log("res", res);

  const data = await res.json();
  console.log("data", data)
  return <PricingClient plans={data.items || []} />;
}