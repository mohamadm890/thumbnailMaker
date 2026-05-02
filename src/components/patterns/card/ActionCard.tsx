import React, { useState } from "react";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function ActionCard({
  image,
  title,
  subtitle,
  onEdit,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        position: "relative",
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
        }}
      />

      {/* 3 DOT MENU */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        ⋯
      </button>

      {/* MENU */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 8,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <div
            onClick={onEdit}
            style={{ padding: 8, cursor: "pointer" }}
          >
            Edit
          </div>
          <div
            onClick={onDelete}
            style={{ padding: 8, cursor: "pointer", color: "red" }}
          >
            Delete
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div style={{ padding: 12 }}>
        <h3 style={{ fontSize: 16, margin: 0 }}>{title}</h3>
        {subtitle && (
          <p style={{ fontSize: 13, color: "#666", marginTop: 4 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}