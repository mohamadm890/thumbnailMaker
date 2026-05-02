import { colors } from "../../colors";

export function getColor(path: string): string {
  const keys = path.split(".");

  let value: any = colors;

  for (const key of keys) {
    value = value?.[key];
  }

  // 👇 IMPORTANT: ensure CSS string
  if (typeof value !== "string") {
    console.warn(`Invalid color token: ${path}`);
    return "#000"; // fallback
  }

  return value;
}