import { useEffect, useState } from "react";

export type Responsive<T> = {
  xs: T;
  sm?: T;
  md?: T;
  lg?: T;
};

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
};

export function useResponsiveHeight(value: Responsive<number>) {
  const [height, setHeight] = useState(value.xs);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.lg && value.lg) {
        setHeight(value.lg);
      } else if (width >= breakpoints.md && value.md) {
        setHeight(value.md);
      } else if (width >= breakpoints.sm && value.sm) {
        setHeight(value.sm);
      } else {
        setHeight(value.xs);
      }
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [value]);

  return height;
}