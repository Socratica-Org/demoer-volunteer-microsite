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
        fiveBySevenBold: ["Five By Seven Bold", "sans-serif"],
        conte: ["Conte", "sans-serif"],
      },
      boxShadow: {
        letter:
          "0px 8px 0px 0px rgba(0, 0, 0, 0.24), 0px 4px 48px 0px rgba(0, 0, 0, 0.16) inset",
      },
    },
  },
  plugins: [],
} satisfies Config;
