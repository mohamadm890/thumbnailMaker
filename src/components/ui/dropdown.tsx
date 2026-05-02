import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import { dropdownStyles } from "../design-system/compountStyles/dropdownStyles";

type Option = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

type Props = {
  options: Option[];
  placeholder?: string;

  value?: string; // ✅ controlled value
  onChange?: (value: string) => void; // ✅ notify parent
};

export default function Dropdown({
  options,
  placeholder = "Select...",
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  // ✅ derive selected from value
  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (!value && options.length > 0) {
      onChange?.(options[0].value);
    }
  }, [options]);
  
  const styledrop: any = dropdownStyles.trigger;
  return (
    <div style={{ position: "relative", width: "auto" }}>
      
      {/* TRIGGER */}
      <div
        style={styledrop} 
        onClick={() => setOpen((prev) => !prev)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {selected?.icon && (
            <selected.icon size={16} color="#CFE2FF" style={{ opacity: 0.8 }} />
          )}

          <span>
            {selected ? selected.label : placeholder}
          </span>
        </div>

        <ChevronsUpDown size={18} style={{ marginLeft: 8, opacity: 0.6 }} />
      </div>

      {/* MENU */}
      {open && (
        <div style={dropdownStyles.menu}>
          {options.map((opt) => {
            const Icon = opt.icon;

            return (
              <div
                key={opt.value}
                style={dropdownStyles.item}
                onClick={() => {
                  onChange?.(opt.value); // ✅ send to parent
                  setOpen(false);
                }}
                onMouseEnter={(e) => {
                  Object.assign(
                    e.currentTarget.style,
                    dropdownStyles.itemStates.hover
                  );
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, {
                    backgroundColor: "transparent",
                  });
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {Icon && (
                    <Icon size={16} color="#7DB3FF" style={{ opacity: 0.8 }} />
                  )}
                  <span>{opt.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


