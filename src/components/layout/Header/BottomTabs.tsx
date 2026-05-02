"use client";

import { LayoutGrid, Wand2, LayoutDashboard, Folder } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function BottomTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-3 md:hidden"
      style={{
        backgroundColor: "#1a1d22",
        borderTop: "1px solid #40444D",
      }}
    >
      {/* Dashboard */}
      <button
        onClick={() => router.push("/dashboard")}
        className="flex flex-col items-center text-xs transition"
        style={{
          color: isActive("/dashboard") ? "#0068DF" : "#40444D",
        }}
      >
        <LayoutDashboard size={20} />
My Library              </button>

      {/* Create */}
      <button
        onClick={() => router.push("/generate")}
        className="flex flex-col items-center text-xs transition"
        style={{
          color: isActive("/generate") ? "#0068DF" : "#40444D",
        }}
      >
        <Wand2 size={22} />
        Create
      </button>

      {/* Settings */}
    
    </div>
  );
}