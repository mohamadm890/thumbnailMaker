import { JSX } from "react";
import { getColor } from "../design-system/compountStyles/utils/getColor";
import { getTextStyle } from "../design-system/compountStyles/utils/getTextStyle";


type Props = {
  variant?: keyof typeof import("../design-system/typography").typography.textStyle;
  color?: string; // example: "text.primary"
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function Text({
  variant = "body",
  color = "text.primary",
  as: Component = "span",
  children,
  style,
}: Props) {
  const textStyle = getTextStyle(variant);
  const textColor = getColor(color);

  return (
    <Component
      style={{
        ...textStyle,
        color: textColor,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}