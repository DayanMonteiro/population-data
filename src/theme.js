import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      warning: "#FD8D3C",
      error: "#D41C1C",
      white: "#FFFFFF",
      black: "#283034",
      blue: "#0088ff",
      gray100: "#F5F5F5",
      gray200: "#BFBFBF",
      gray300: "#A1A1A1",
      gray400: "#848484",
      gray500: "#666666",
      gray600: "#525252",
      gray700: "#3D3D3D",
      gray800: "#292929",
      gray900: "#1F1F1F",
      green: "#02b302",
    },
    fonts: {
      sans: "Open Sans, apple-system, sans-serif",
    },
    fontSizes: {
      xxs: "1rem",
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "2rem",
      xl: "2.4rem",
      xxl: "3.2rem",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "600",
      bold: "700",
    },
    shadows: {
      light: "1px 2px 2px hsl(0deg 0% 50% / 0.333)",
      default: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      active: "0 0 #0000, 0 0 #0000, 0 4px #5370FF",
    },
  },
  media: {
    mobile: "(min-width: 640px)",
    tablet: "(min-width: 1024px)",
    maxTablet: "(max-width: 1024px)",
    desktop: "(min-width: 1280px)",
    laptopSmall: "(min-width: 1366px)",
    laptopMedium: "(min-width: 1440px)",
    laptopHigh: "(min-width: 1920px)",
  },
});
