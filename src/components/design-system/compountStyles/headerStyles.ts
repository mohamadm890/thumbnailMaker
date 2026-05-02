import { spacing } from "../spacing";

export const headerStyles = {
  root: {
    height: {
      xs: "48px",
      sm: "56px",
      md: "64px",
      lg: "72px",
    },
    borderBottom: "1px solid #e5e7eb",
  },

  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },

  left: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: spacing.sm,
  },
} as const;