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
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "VizThumb | Best AI to Create YouTube Thumbnails with High CTR",
  
  description: "Stop wasting hours on design. Use the best AI to create click-worthy YouTube thumbnails in 30 seconds straight from your video script. No Photoshop skills required.",
  
  alternates: {
    canonical: "https://vizthumb.com", 
  },

  openGraph: {
    title: "VizThumb | Best AI to Create YouTube Thumbnails with High CTR",
    description: "Stop wasting hours on design. Use the best AI to create click-worthy YouTube thumbnails in 30 seconds straight from your video script. No Photoshop skills required.",
    type: "website",
    url: "https://vizthumb.com", 
    siteName: "VizThumb",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "VizThumb | Best AI to Create YouTube Thumbnails with High CTR",
    description: "Stop wasting hours on design. Use the best AI to create click-worthy YouTube thumbnails in 30 seconds straight from your video script. No Photoshop skills required.",
  },
};

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
