"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft } from 'lucide-react';

import { headerStyles } from "@/components/design-system/compountStyles/headerStyles";
import { useResponsiveHeight } from "@/components/design-system/compountStyles/utils/responsive";
import { headerHeight } from "@/components/design-system/header";
import { BottomTabs } from "./BottomTabs";

type Props = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export function HeaderContainer({ left, center, right }: Props) {
  const height = useResponsiveHeight(headerHeight);
  const pathname = usePathname();
  const router = useRouter();

  const isPreview = pathname.includes("/preview") ;

  const leftContent = isPreview ? (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center w-6 h-6 rounded-full transition"
      style={{ color: "#6B7280", background: "#202226" }}
    >
      <ChevronLeft size={18} />
      
    </button>
  ) : (
    left
  );

  return (
    <>
      <header
        style={{
          padding: "8px",
          height: `${height}px`,
          borderBottom: "1px solid #202025",
        }}
      >
        <div style={headerStyles.container}>
          <div style={headerStyles.left}>{leftContent}</div>

          <div style={headerStyles.center}>{center}</div>

          <div style={headerStyles.right}>{right}</div>
        </div>
      </header>

      {!isPreview && <BottomTabs />}
    </>
  );
}