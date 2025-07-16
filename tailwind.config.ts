// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // FIXED: Added a precise color palette from the design
      colors: {
        'brand-header': '#111827',     // For the main top header
        'brand-bg-main': '#F1F5F9',    // The main background (a light slate)
        'brand-card-bg': '#FFFFFF',    // The background for all cards
        'brand-primary-blue': '#2563EB', // The brighter blue for icons
        'brand-dark-blue': '#1E293B',   // The dark blue for buttons & active states
      }
    },
  },
  plugins: [],
};
export default config;