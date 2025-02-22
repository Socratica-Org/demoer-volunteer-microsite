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
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pop: 'pop 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
