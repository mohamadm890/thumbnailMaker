"use client"
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export function CompactCard({ title, subtitle, icon }: Props) {

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 10,
        borderRadius: 10,
        background: "#fff",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      {icon && <div>{icon}</div>}

      {/* TEXT */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>
          {title}
        </div>

        {subtitle && (
          <div style={{ fontSize: 12, color: "#666" }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}