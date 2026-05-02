import { typography } from "../../typography";

export function getTextStyle(name: keyof typeof typography.textStyle) {
    const style = typography.textStyle[name];
  
    return {
      fontFamily: typography.fontFamily[style.fontFamily as keyof typeof typography.fontFamily],
      fontSize: typography.fontSize[style.fontSize as keyof typeof typography.fontSize],
      fontWeight: typography.fontWeight[style.fontWeight as keyof typeof typography.fontWeight],
      lineHeight: typography.lineHeight[style.lineHeight as keyof typeof typography.lineHeight],
      letterSpacing: typography.letterSpacing[style.letterSpacing as keyof typeof typography.letterSpacing],
    };
  }