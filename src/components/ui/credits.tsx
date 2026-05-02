"use client";

import { useRouter } from "next/navigation";
import CreditIcon from "@/components/icons/credit";

export function CreditsBadge({ credits }: { credits: number }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/pricing")}
      className="flex items-center gap-2 bg-[#131318] border border-[#202025] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#1a1a20] transition"
    >
      <CreditIcon width={12} height={12} style={{ color: "#0068DF" }} />

      <span className="text-xs sm:text-sm text-[#A0A4AD]">
        <span className="sm:hidden">{credits}</span>
        <span className="hidden sm:inline">{credits} Credits</span>
      </span>
    </div>
  );
}