/**
 * Design tokens tipados — espejo de Figma
 * Fuente: Figma `san-bartolo` (oFJPlzxOu28Muw49NtvugL)
 */

export const colors = {
  neutral: {
    100: "#ffffff",
    150: "#f7fafb",
    200: "#d4e4ea",
    400: "#9baab0",
    500: "#1d292e",
    600: "#000305",
  },
  primary: {
    100: "#124455",
    300: "#9acce0",
  },
  secondary: {
    100: "#77975a",
    300: "#afd091",
    400: "#cceeae",
  },
  accent: {
    100: "#c37259",
    300: "#ffab8f",
  },
  text: {
    title: "#1d292e",
    paragraph: "#000305",
  },
  background: {
    white: "#ffffff",
    blue: "#9acce0",
    green: "#afd091",
    coral: "#ffab8f",
    greyLight: "#f7fafb",
    grey: "#d4e4ea",
  },
} as const;

export const fonts = {
  montserrat: "var(--font-montserrat)",
  lora: "var(--font-lora)",
  badScript: "var(--font-bad-script)",
  dmSerifDisplay: "var(--font-dm-serif)",
} as const;

export const fontSize = {
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
} as const;

export const fontWeight = {
  400: 400,
  700: 700,
} as const;

export const lineHeight = {
  24: "24px",
  26: "26px",
  32: "32px",
} as const;

export const letterSpacing = {
  0: "0px",
  2: "2px",
  4: "4px",
} as const;

export const gap = {
  4: "4px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  60: "60px",
} as const;

export const padding = {
  4: "4px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  36: "36px",
  40: "40px",
} as const;

export const margin = {
  40: "40px",
  60: "60px",
  80: "80px",
} as const;

export const radii = {
  xs: "4px",
  s: "8px",
  m: "16px",
} as const;

/** Text styles de Figma (composiciones tipográficas) */
export const textStyles = {
  link: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[14],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[2],
    textTransform: "uppercase" as const,
  },
  linkSelected: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[14],
    fontWeight: fontWeight[700],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[2],
    textTransform: "uppercase" as const,
  },
  linkHover: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[14],
    fontWeight: fontWeight[700],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[2],
    textTransform: "uppercase" as const,
    color: colors.accent[300],
  },
  titleH1: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[32],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[32],
    letterSpacing: letterSpacing[4],
    textTransform: "uppercase" as const,
  },
  titleH2: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[24],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[32],
    letterSpacing: letterSpacing[4],
    textTransform: "uppercase" as const,
  },
  titleH3: {
    fontFamily: fonts.montserrat,
    fontSize: fontSize[16],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[4],
    textTransform: "uppercase" as const,
  },
  subtitle: {
    fontFamily: fonts.lora,
    fontSize: fontSize[16],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[26],
    letterSpacing: letterSpacing[0],
  },
  paragraph: {
    fontFamily: fonts.lora,
    fontSize: fontSize[16],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[0],
  },
  button: {
    fontFamily: fonts.badScript,
    fontSize: fontSize[20],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[24],
    letterSpacing: letterSpacing[0],
  },
  accentText: {
    fontFamily: fonts.badScript,
    fontSize: fontSize[24],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[32],
    letterSpacing: letterSpacing[0],
  },
} as const;
