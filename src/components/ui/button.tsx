"use client";

import { useState, CSSProperties } from "react";
import { buttonStyles } from "../design-system/compountStyles/buttonStyles";

type Variant = "primary" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
  width?: string | number;
};

export default function Button({
  variant = "primary",
  disabled,
  fullWidth = false,
  width,
  children,
  ...rest
}: Props) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const style: any = {
    ...buttonStyles.base,
    ...buttonStyles.variants[variant],

    width: width ? width : fullWidth ? "100%" : "auto",

    ...(hover ? buttonStyles.states.hover : {}),
    ...(active ? buttonStyles.states.active : {}),
    ...(disabled ? buttonStyles.states.disabled : {}),
  } as const;

  return (
    <button
      {...rest}
      type="button"
      style={style}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {children}
    </button>
  );
}