import { useState } from "react";
import { cardStyles } from "../design-system/compountStyles/cardStyles";

type Props = {
  children: React.ReactNode;
  hoverable?: boolean;
  onClick?: () => void;
};

export default function Card({
  children,
  hoverable = false,
  onClick,
}: Props) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const style = {
    ...cardStyles.base,
    ...(hoverable ? cardStyles.variants.hoverable : {}),

    ...(hover ? cardStyles.states.hover : {}),
    ...(active ? cardStyles.states.active : {}),
  };

  return (
    <div
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {children}
    </div>
  );
}