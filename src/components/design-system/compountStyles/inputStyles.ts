import { colors } from "../colors";
import { spacing } from "../spacing";
import { typography } from "../typography";
import { layout } from "../layout";

export const inputStyles = {
  /**
   * BASE STYLE
   */
  base: {
    width: "100%",
    height: layout.input.height.md,

    paddingLeft: layout.input.paddingX.md,
    paddingRight: layout.input.paddingX.md,

    fontSize: typography.fontSize.body, // ✅ FIXED
    fontFamily: typography.fontFamily.base,
    fontWeight: typography.fontWeight.regular,

    color: colors.text.primary,
    backgroundColor: colors.surface.elevated,

    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.surface.border,

    borderRadius: spacing.sm,

    outline: "none",
    boxShadow: "none",
    transition: "all 0.2s ease",
    lineHeight: 1.4,
  },

  /**
   * SIZE VARIANTS
   */
  variants: {
    sm: {
      height: layout.input.height.sm,
      fontSize: typography.fontSize.label, // ✅ FIXED
      paddingLeft: layout.input.paddingX.sm,
      paddingRight: layout.input.paddingX.sm,
    },

    md: {
      height: layout.input.height.md,
      fontSize: typography.fontSize.body, // ✅ FIXED
      paddingLeft: layout.input.paddingX.md,
      paddingRight: layout.input.paddingX.md,
    },

    lg: {
      height: layout.input.height.lg,
      fontSize: typography.fontSize.bodyLarge, // ✅ FIXED
      paddingLeft: layout.input.paddingX.lg,
      paddingRight: layout.input.paddingX.lg,
    },
  },

  /**
   * STATES
   */
  states: {
    focus: {
      borderColor: colors.brand.base,
      boxShadow: `0 0 0 3px ${colors.focus.ring}`,
    },

    error: {
      borderColor: colors.danger.base,
      backgroundColor: colors.danger.tint,
    },

    success: {
      borderColor: colors.success.base,
      backgroundColor: colors.success.tint,
    },

    disabled: {
      backgroundColor: colors.disabled.background,
      color: colors.disabled.text,
      borderColor: colors.disabled.border,
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },

  /**
   * PLACEHOLDER
   */
  placeholder: {
    color: colors.text.muted,
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.placeholder,
    fontFamily: typography.fontFamily.base,
  },
};