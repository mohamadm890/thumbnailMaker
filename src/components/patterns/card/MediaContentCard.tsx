"use client";

import { CardContent } from "./CardContent";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
  
};

export function MediaContentCard({
  image,
  title,
  subtitle,
  onClick,
  onDelete,
  onDownload,
  
}: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 10,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      {/* IMAGE */}
      <img
        src={image}
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          objectFit: "cover",
          border: "1px solid #40444D",
        }}
      />

      {/* CONTENT */}
      <CardContent
        title={title}
        subtitle={subtitle}
        onDelete={onDelete}
        onDownload={onDownload}
      
      />
    </div>
  );
}