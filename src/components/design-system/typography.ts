export const typography = {
  fontFamily: {
    heading: "Sora, sans-serif",
    base: "Inter, sans-serif",
    mono: "JetBrains Mono, monospace",
  },

  fontSize: {
    caption: "clamp(11px, 0.8vw, 12px)",
    label: "clamp(12px, 1vw, 14px)",
    body: "clamp(13px, 1.2vw, 16px)",
    placeholder: "clamp(11px, 0.9vw, 13px)",

    bodyLarge: "clamp(14px, 1.5vw, 18px)",
    subtitle: "clamp(16px, 1.8vw, 20px)",
    h3: "clamp(16px, 2vw, 20px)",
    h2: "clamp(22px, 2.5vw, 32px)",
    h1: "clamp(26px, 3vw, 40px)",
    hero: "clamp(30px, 4vw, 52px)",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    caption: 1.5,
    label: 1.5,
    body: 1.5,
    bodyLarge: 1.6,
    subtitle: 1.4,
    h3: 1.3,
    h2: 1.25,
    h1: 1.15,
    hero: 1.1,
  },

  letterSpacing: {
    caption: "0em",
    label: "0.03em",
    body: "0em",
    bodyLarge: "0em",
    subtitle: "0em",
    h3: "-0.01em",
    h2: "-0.02em",
    h1: "-0.02em",
    hero: "-0.03em",
  },

  textStyle: {
    caption: {
      fontSize: "caption",
      fontWeight: "regular",
      lineHeight: "caption",
      letterSpacing: "caption",
      fontFamily: "base",
    },

    label: {
      fontSize: "label",
      fontWeight: "medium",
      lineHeight: "label",
      letterSpacing: "label",
      fontFamily: "base",
    },

    body: {
      fontSize: "body",
      fontWeight: "regular",
      lineHeight: "body",
      letterSpacing: "body",
      fontFamily: "base",
    },

    bodyLarge: {
      fontSize: "bodyLarge",
      fontWeight: "regular",
      lineHeight: "bodyLarge",
      letterSpacing: "bodyLarge",
      fontFamily: "base",
    },

    subtitle: {
      fontSize: "subtitle",
      fontWeight: "medium",
      lineHeight: "subtitle",
      letterSpacing: "subtitle",
      fontFamily: "heading",
    },

    h3: {
      fontSize: "h3",
      fontWeight: "semibold",
      lineHeight: "h3",
      letterSpacing: "h3",
      fontFamily: "heading",
    },

    h2: {
      fontSize: "h2",
      fontWeight: "semibold",
      lineHeight: "h2",
      letterSpacing: "h2",
      fontFamily: "heading",
    },

    h1: {
      fontSize: "h1",
      fontWeight: "bold",
      lineHeight: "h1",
      letterSpacing: "h1",
      fontFamily: "heading",
    },

    hero: {
      fontSize: "hero",
      fontWeight: "bold",
      lineHeight: "hero",
      letterSpacing: "hero",
      fontFamily: "heading",
    },
  },
}
