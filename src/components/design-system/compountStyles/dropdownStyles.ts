import { colors } from "../colors";
import { spacing } from "../spacing";
import { typography } from "../typography";

export const dropdownStyles = {
  /**
   * TRIGGER (button-like)
   */
  trigger: {
    display: "flex",
    width: "100%",
        alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,

    paddingLeft: spacing.md,
    paddingRight: spacing.md,

    height: "44px",

    backgroundColor: colors.surface.elevated,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.surface.border,
    borderRadius: spacing.sm,

    fontSize: typography.fontSize.body,
    color: colors.text.primary,

    cursor: "pointer",
    userSelect: "none",

    transition: "all 0.2s ease",
  },

  /**
   * MENU (floating panel)
   */
  menu: {
    
    marginTop: spacing.xs,
  
    backgroundColor: colors.surface.elevated,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.surface.border,
  
    borderRadius: spacing.sm,
    padding: spacing.xs,
  
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    zIndex: 50,
  },

  /**
   * ITEM (each option)
   */
  item: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: typography.fontSize.body,
    color: colors.text.primary,

    borderRadius: "6px",
    cursor: "pointer",

    transition: "all 0.15s ease",
  },

  itemStates: {
    hover: {
      backgroundColor: colors.surface.border,
    },

    active: {
      backgroundColor: colors.brand.base,
      color: colors.text.high,
    },
  },
};