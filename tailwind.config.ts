import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        theme: "background-color, color",
      },

      colors: {
        "brand-header": "#111827", //  top header
        "brand-bg-main": "#F1F5F9", // main background (a light slate)
        "brand-card-bg": "#FFFFFF", // background for all cards
        "brand-primary-blue": "#2563EB", //  brighter blue for icons
        "brand-dark-blue": "#1E293B", //  dark blue for buttons & active states
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
