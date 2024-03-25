import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4D37C9",
          "primary-dark": "#412CBB",
          accent: "#583AFE",
          "accent-dark": "#4D31E7",
          secondary: "#7C71F4",
          "secondary-dark": "#7066E0",
        },
        surface: {
          primary: "#fff",
          secondary: "#EFEEF6",
        },
        text: {
          primary: "#080808",
          secondary: "#505055",
          tertiary: "#BCBBC3",
        },
        icon: {
          primary: "#333336",
        },
        decorative: {
          blue: "#583AFE",
          red: "#EA0038",
          purple: "#AC9DFE",
          pink: "#F4809C",
        },
      },
      screens: {
        desktop: "1248px",
      },
      borderRadius: {
        "4xl": "40px",
      },
      lineHeight: {
        "12": "3rem",
      },
      keyframes: {
        "gradient-x": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "200% 50%",
          },
        },
        "gradient-fill": {
          "0%": {
            fill: "#F4809C",
          },
          "50%": {
            fill: "#AC9DFE",
          },
          "100%": {
            fill: "#F4809C",
          },
        },
        "gradient-stroke": {
          "0%": {
            stroke: "#F4809C",
          },
          "50%": {
            stroke: "#AC9DFE",
          },
          "100%": {
            stroke: "#F4809C",
          },
        },
      },
      animation: {
        "gradient-x": "gradient-x 2.5s linear infinite",
        "gradient-fill": "gradient-fill 2.5s linear infinite",
        "gradient-stroke": "gradient-stroke 2.5s linear infinite",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
