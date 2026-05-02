import { useState } from "react";
import { chipStyles } from "../design-system/compountStyles/ChipStyles";

type Variant = "default" | "selected" | "danger";

type Props = {
  label: string;
  variant?: Variant;
  onClick?: () => void;
};

export default function Chip({
  label,
  variant = "default",
  onClick,
}: Props) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // 🧠 combine styles from design system
  const style: any = {
    ...chipStyles.base,
    ...chipStyles.variants[variant],

    ...(hover ? chipStyles.states.hover : {}),
    ...(active ? chipStyles.states.active : {}),
  };

  return (
    <span
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {label}
    </span>
  );
}