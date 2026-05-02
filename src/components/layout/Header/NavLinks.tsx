"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wand2, CreditCard } from "lucide-react";

export function NavLinks() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "flex items-center gap-2 text-[#0068DF] font-[600]"
      : "flex items-center gap-2 text-[#6B7280] opacity-60 hover:opacity-100";

  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link href="/dashboard" className={linkClass("/dashboard")}>
        <LayoutDashboard className="w-4 h-4" />
        My Library
      </Link>

      <Link href="/generate" className={linkClass("/generate")}>
        <Wand2 className="w-4 h-4" />
        Generator
      </Link>

      <Link href="/pricing" className={linkClass("/pricing")}>
        <CreditCard className="w-4 h-4" />
        Pricing
      </Link>
    </nav>
  );
}