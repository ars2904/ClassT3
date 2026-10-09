import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#162d52",
          900: "#0d1f3c",
          950: "#080f1d",
        },
        gold: {
          300: "#e2c97e",
          400: "#d4b863",
          500: "#c9a84c",
          600: "#a6852c",
          700: "#84651e",
        },
        saffron: {
          500: "#e8641a",
          600: "#d05210",
        },
        ivory: {
          50: "#fdfbf7",
          100: "#faf7f2",
          200: "#f0ebe0",
          300: "#e4dcce",
        },
        brand: {
          50: "#f0f4fe",
          100: "#dde6fc",
          200: "#c3d3fa",
          300: "#9ab8f7",
          400: "#6992f1",
          500: "#446eea",
          600: "#2d5fa3",
          700: "#1a3a6c",
          800: "#162d52",
          900: "#0d1f3c",
          950: "#080f1d",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Source Sans 3'", "'Inter'", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(13, 31, 60, 0.08), 0 0 1px 1px rgba(13, 31, 60, 0.04)',
        'premium-hover': '0 20px 40px -12px rgba(13, 31, 60, 0.15), 0 0 1px 1px rgba(201, 168, 76, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
