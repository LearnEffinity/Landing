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
      maxWidth: {
        '3xl': '32rem', // or any other value you need
      },
      colors: {
        brand: {
          primary: "#4D37C9",
          accent: "#583AFE",
          secondary: "#7C71F4",
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
      fontSize: {
        massive: "240px",
        title: "52px",
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
      },
      animation: {
        "gradient-x": "gradient-x 2.5s linear infinite",
      },
    },
  },
};
export default config;
