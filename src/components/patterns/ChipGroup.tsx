import { useState } from "react";
import Chip from "../ui/chip";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];

  value?: string[]; // ✅ controlled
  onChange?: (values: string[]) => void;

  multiple?: boolean;
};

export default function ChipGroup({
  options,
  value = [],
  onChange,
  multiple = true,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggle = (val: string) => {
    let updated: string[] = [];

    if (multiple) {
      updated = value.includes(val)
        ? value.filter((v) => v !== val)
        : [...value, val];
    } else {
      updated = value.includes(val) ? [] : [val];
    }

    onChange?.(updated); // ✅ notify parent only
  };

  const visibleOptions = expanded ? options : options.slice(0, 3);
  const hasMore = options.length > 3;

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {visibleOptions.map((opt) => {
        const isSelected = value.includes(opt.value);

        return (
          <Chip
            key={opt.value}
            label={opt.label}
            variant={isSelected ? "selected" : "default"}
            onClick={() => toggle(opt.value)}
          />
        );
      })}

      {hasMore && (
        <div
          onClick={() => setExpanded((p) => !p)}
          style={{
            padding: "6px 10px",
            color: "#6B7280",
            fontSize: 14,
            cursor: "pointer",
            fontWeight: 500,
            userSelect: "none",
          }}
        >
          {expanded ? "Less" : `+${options.length - 3} More`}
        </div>
      )}
    </div>
  );
}