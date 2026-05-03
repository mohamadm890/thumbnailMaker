import { BeforeAfter } from "@/components/leading/BeforeAfter";
import Demo from "@/components/leading/demo";
import Hero from "@/components/leading/Hero";
import HowItWorks from "@/components/leading/howItwork";
import Problem from "@/components/leading/Problem";
import SolutionBold from "@/components/leading/SolutionBold";
import Reviews from "@/components/leading/Reviews";
import CTASection from "@/components/leading/CTA"
import { getUserByClerkId } from "@/server/credits/credits.repository";
import { auth } from "@clerk/nextjs/server";
import Footer from "@/components/leading/Footer";
import MarketingHeader from "@/components/layout/Header/MarketingHeader";

export default async function DashboardPage() {
 


  return (
    <div className="text-white flex flex-col items-center gap-4">
     
     <Hero />
      <Problem />
      <SolutionBold />
      <HowItWorks />
      <Reviews />
      <CTASection />
      <Footer />

    </div>
  );
}
