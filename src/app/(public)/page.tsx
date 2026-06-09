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
  title: "VizThumb - Turn Video Scripts into High-CTR Thumbnails",
  description: "Stop wasting hours on thumbnails that get ignored. Turn your video script into a high-CTR masterpiece in 30 seconds. No Photoshop skills required.",
  
  keywords: [
    "create thumbnails ai",
    "create youtube thumbnails with ai",
    "best ai to create youtube thumbnails",
    "use ai to create youtube thumbnails",
    "best ai tools to create thumbnails",
    "ai app to create youtube thumbnails",
    "how to create thumbnails using ai",
    "create click worthy youtube thumbnails in seconds with ai",
    "create viral youtube thumbnails with ai",
    "ai to create thumbnails free",
    "create thumbnail from video ai",
    "create thumbnail from image ai",
    "generate ai thumbnails for youtube",
    "make ai thumbnails for youtube",
    "free ai thumbnail image generator"
  ],

  alternates: {
    canonical: "https://vizthumb.com", 
  },

  openGraph: {
    title: "VizThumb - Turn Video Scripts into High-CTR Thumbnails",
    description: "Stop wasting hours on thumbnails that get ignored. Turn your video script into a high-CTR masterpiece in 30 seconds. No Photoshop skills required.",
    type: "website",
    url: "https://vizthumb.com", 
    siteName: "VizThumb",
  },
  twitter: {
    card: "summary_large_image",
    title: "VizThumb - Turn Video Scripts into High-CTR Thumbnails",
    description: "Stop wasting hours on thumbnails that get ignored. Turn your video script into a high-CTR masterpiece in 30 seconds. No Photoshop skills required.",
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
