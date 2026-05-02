'use client'

import { UserButton } from "@clerk/nextjs";
import { CreditsBadge } from "@/components/ui/credits";
import { dark } from "@clerk/ui/themes";

export default function HeaderActions({ credits }: { credits: number }) {
  return (
    <div className="flex items-center gap-3">
      <CreditsBadge credits={credits} />

      <UserButton
        appearance={{
          theme: dark,
        }}
      />
    </div>
  );
}