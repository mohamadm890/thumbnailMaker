import { auth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/server/credits/credits.repository";
import { UserButton } from "@clerk/nextjs";
import { CreditsBadge } from "@/components/ui/credits";
import { HeaderContainer } from "./HeaderContainer";
import Link from "next/link";
import { LayoutDashboard, Wand2, CreditCard } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { dark } from '@clerk/ui/themes'
import HeaderActions from "./HeaderActions";


export default async function HeaderServer() {
  const { userId } = await auth();

  
  if (!userId) {
    return;
  }
  
    const user = await getUserByClerkId(userId);
    const credits = user?.credits ?? 0;
  
  return (
    <HeaderContainer
    left={
      <div className="flex items-center gap-12">
        <img src="/logo.svg" alt="Logo" style={{ height: 20 }} />
  
        {/* NAV LINKS */}
        <div className="hidden lg:block">
        <NavLinks />

        </div>

      </div>
    }
          right={
            <HeaderActions credits={credits} />
      }
    />
  );
}