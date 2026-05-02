"use client";

import { getColor } from "@/components/design-system/compountStyles/utils/getColor";
import { getTextStyle } from "@/components/design-system/compountStyles/utils/getTextStyle";
import MyDropdown from "./ActionsCard";

type Props = {
  image?: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
};

export function CardContent({
  title,
  subtitle,
  onDelete,
  onDownload,
}: Props) {
  const truncateText = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  return (
    <div style={{ padding: 8 }}>
      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            ...getTextStyle("h3"),
            color: getColor("text.secondary"),
          }}
        >
          {truncateText(title, 30)}
        </h3>

        {/* MENU */}
        <MyDropdown
          onDelete={onDelete}
          onDownload={onDownload}
        />
      </div>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          style={{
            ...getTextStyle("body"),
            color: getColor("text.muted"),
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}