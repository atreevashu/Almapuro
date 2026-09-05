import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#005131",
          light: "#0a6b42",
          dark: "#003f17",
        },
        ink: "#1a3a1a",
        cream: {
          DEFAULT: "#fef9ef",
          dark: "#f6ebdd",
        },
        gold: {
          DEFAULT: "#c8a84b",
          light: "#d7bc88",
          dark: "#744708",
          footer: "#c79541",
        },
        leaf: "#2d5a1e",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
