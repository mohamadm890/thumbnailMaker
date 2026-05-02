import { colors } from "../colors";
import { spacing } from "../spacing";

export const cardStyles = {
  base: {
    backgroundColor: colors.surface.elevated,
    border: `1px solid ${colors.surface.border}`,
    borderRadius: spacing.sm,

    padding: spacing.md,

    transition: "all 0.2s ease",
  },

  variants: {
    default: {},
    hoverable: {
      cursor: "pointer",
    },
  },

  states: {
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },

    active: {
      transform: "scale(0.99)",
    },
  },
};