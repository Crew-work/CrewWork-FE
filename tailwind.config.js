/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    // https://tailwindcss.com/docs/customizing-colors
    colors: {
      transparent: "transparent",
      primary: {
        light: "#799CF1",
        DEFAULT: "#4376F1",
        dark: "#1858F1",
      },
      secandary: {
        light: "#BA68C8",
        DEFAULT: "#9C27B0",
        dark: "#7B1FA2",
      },
      error: {
        light: "#EF5350",
        DEFAULT: "#D32F2F",
        dark: "#1858F1",
      },
      warning: {
        light: "#FF9800",
        DEFAULT: "#ED6C02",
        dark: "#E65100",
      },
      info: {
        light: "#03A9F4",
        DEFAULT: "#0288D1",
        dark: "#01579B",
      },
      success: {
        light: "#4CAF50",
        DEFAULT: "#2E7D32",
        dark: "#1B5E20",
      },
      gray: {
        superlight: "#F4F4F4",
        light: "#DBDBDB",
        DEFAULT: "#AAAAAA",
        dark: "#737373",
        charcol: "#434343",
      },
      white: "#FFFFFF",
      black: "#242424",
    },
  },
  plugins: [],
};
