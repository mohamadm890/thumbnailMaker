import { spacing } from "./spacing";

export const layout = {
  container: {
    paddingX: {
      xs: spacing.sm,
      sm: spacing.md,
      md: spacing.lg,
    },

    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "720px",
      lg: "960px",
      xl: "1200px",
    },
  },

  section: {
    gap: {
      xs: spacing.md,
      sm: spacing.lg,
      md: spacing["2xl"],
    },
  },

  grid: {
    columns: {
      xs: 4,
      sm: 4,
      md: 8,
      lg: 12,
    },
    gap: spacing.md,
  },

  header: {
    height: {
      xs: "48px",
      sm: "56px",
      md: "64px",
      lg: "72px",
    },
  },

  // 🧠 NEW: INPUT SYSTEM (important)
  input: {
    height: {
      sm: "36px",  // compact UI, filters, tables
      md: "44px",  // default forms ⭐
      lg: "52px",  // landing pages, mobile focus
    },

    paddingX: {
      sm: spacing.sm,
      md: spacing.md,
      lg: spacing.lg,
    },

    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
    },
  },

  breakpoints: {
    xs: 360,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};