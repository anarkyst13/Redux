// src/styles/theme.ts
export const theme = {
  colors: {
    main: {
      primary: "#FF6633",
      secondary: "#70C05B",
      background: "#F4F4F2",
      surface: "#FFFFFF",
    },
    pallette: {
      error: "#D80000",
      success: "#008C49",
      info: "#1CB9FC",
      warning: "#FCA21C",
    },
    text: {
      background: "#291E0F",
      surface: "#414141",
      primary: "#FFFFFF",
      secondary: "#F4F4F2",
      error: "#f2f2f2",
      success: "#f2f2f2",
    },
    gray: {
      lightest: "#F3F2F1",
      light: "#BFBFBF",
      hard: "#8F8F8F",
      hardest: "#606060",
    },
    muted: {
      primary: "#fcd5ba",
      secondary: "#e5ffde",
      error: "#ffc7c7",
    },
  },
  breakpoints: {
    mobile: "360px",
    tablet: "768px",
    desktop: "1280px",
  },
  // Добавляем категории для масштабируемости
};

export type Theme = typeof theme;
