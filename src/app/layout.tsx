import type { Metadata } from 'next'
import { ClerkProvider} from '@clerk/nextjs'
import './globals.css'

import { Sora, Inter } from "next/font/google";



const sora = Sora({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "VizThumb – AI YouTube Thumbnail Generator",
  description:
    "Boost your YouTube CTR with AI-generated thumbnails. Create high-converting thumbnails in seconds.",
  keywords: [
    "youtube thumbnail generator",
    "ai thumbnail maker",
    "increase youtube views",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://vizthumb.com",
  },
 verification: {
    google: "X0DBbTpTcFcgEZmQSRO34mnrac1ebhbcIysqM8P",
  },
  openGraph: {
    title: "VizThumb – AI YouTube Thumbnail Generator",
    description:
      "Create viral YouTube thumbnails in seconds using AI.",
    url: "https://vizthumb.com",
    siteName: "VizThumb",
    images: [
      {
        url: "https://vizthumb.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VizThumb – AI YouTube Thumbnail Generator",
    description:
      "Create viral YouTube thumbnails in seconds using AI.",
    images: ["https://vizthumb.com/og.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <ClerkProvider
     signInUrl="/auth/sign-in"
    signUpUrl="/auth/sign-up"
    
    >

    <html lang="en">
            <body className={`${sora.variable} ${inter.variable} bg-[#0B0B0D]`}>

        

          {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
