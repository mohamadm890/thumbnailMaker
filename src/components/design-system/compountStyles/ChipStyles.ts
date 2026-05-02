import { colors } from "../colors";
import { spacing } from "../spacing";
import { typography } from "../typography";

export const chipStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.xs,

    padding: `${spacing.xs} ${spacing.sm}`,

    borderRadius: "6px", // pill shape

    fontSize: typography.fontSize.label,
    fontFamily: typography.fontFamily.base,
    fontWeight: typography.fontWeight.medium,

    borderWidth: "1px",
    borderStyle: "solid",

    cursor: "pointer",
    userSelect: "none",

    transition: "all 0.2s ease",
  },

  variants: {
    default: {
      backgroundColor: colors.surface.elevated,
      borderColor: colors.surface.border,
      color: colors.text.primary,
    },

    selected: {
      backgroundColor: '#002763',
      borderColor: colors.brand.base,
      color: colors.text.high,
    },

    danger: {
      backgroundColor: colors.danger.tint,
      borderColor: colors.danger.base,
      color: colors.danger.base,
    },
  },

  states: {
    hover: {
      transform: "scale(1.02)",
      opacity: 0.9,
    },
    active: {
      transform: "scale(0.98)",
    },
  },
};