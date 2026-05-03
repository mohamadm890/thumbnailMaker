import { PLANS_FULL } from "@/lib/plans/plans";
import PricingClient from "./PricingClient";


export default async function PricingPage() {

  const ProducatsPlans = PLANS_FULL;
  const plans = Object.values(ProducatsPlans);

  
  
  return <PricingClient plans={plans || []} />;
}
