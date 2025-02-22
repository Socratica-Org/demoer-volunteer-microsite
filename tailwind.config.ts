import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#CDC19F",
      },
      fontFamily: {
        tiempos: ["Tiempos Headline", "serif"],
        fiveBySeven: ["Five By Seven", "sans-serif"],
        conte: ["Conte", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
