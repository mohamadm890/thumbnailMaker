import { colors } from "./colors";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";
import {layout} from "./layout";

export const theme = {
  // =========================
  // 🧱 BACKGROUND SYSTEM
  // =========================
  background: colors.surface.deepest,
  surface: colors.surface.base,
  card: colors.surface.elevated,
  border: colors.surface.border,

  // =========================
  // 📝 TEXT SYSTEM
  // =========================
  text: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    muted: colors.text.muted,
    high: colors.text.high,
  },

  // =========================
  // 🔵 ACTION SYSTEM
  // =========================
  primary: colors.brand.base,
  primaryHover: colors.brand.hover,
  primaryActive: colors.brand.active,

  // =========================
  // 🧩 STATUS SYSTEM
  // =========================
  success: colors.success.base,
  danger: colors.danger.base,
  warning: colors.warning.base,
  info: colors.info.base,

  // =========================
  // 📐 LAYOUT SYSTEM
  // =========================
  spacing,
  radius,

  // =========================
  // ✍️ TYPOGRAPHY SYSTEM
  // =========================
  typography,
  layout
};