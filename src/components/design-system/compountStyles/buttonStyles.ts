import { colors } from "../colors";
import { spacing } from "../spacing";
import { typography } from "../typography";
import { layout } from "../layout";

export const buttonStyles = {
  /**
   * BASE STYLE
   */
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,

    height: layout.input.height.md, // reuse input scale
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,

    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,

    borderRadius: spacing.sm,
    borderWidth: "1px",
    borderStyle: "solid",

    cursor: "pointer",
    transition: "all 0.2s ease",
    outline: "none",
    userSelect: "none",
  },

  /**
   * VARIANTS
   */
  variants: {
    primary: {
      backgroundColor: colors.brand.base,
      borderColor: colors.brand.base,
      color: colors.text.high,
    },

    secondary: {
      backgroundColor: colors.surface.elevated,
      borderColor: colors.surface.border,
      color: colors.text.primary,
    },

    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: colors.brand.base,
    },
  },

  /**
   * STATES
   */
  states: {
    hover: {
      transform: "translateY(-1px)",
      opacity: 0.9,
    },

    active: {
      transform: "translateY(0px)",
      opacity: 0.8,
    },

    disabled: {
      backgroundColor: colors.disabled.background,
      color: colors.disabled.text,
      borderColor: colors.disabled.border,
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
};