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
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
