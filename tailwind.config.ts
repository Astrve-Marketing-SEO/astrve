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
        gold: {
          50: "#FFF8E6",
          100: "#FFF1CC",
          200: "#FFE299",
          300: "#FFD466",
          400: "#FFC733",
          500: "#FFBA00",
          600: "#CC9500",
          700: "#997000",
          800: "#664A00",
          900: "#332500",
        },
        rich: {
          black: "#0D0D0D",
          dark: "#161616",
          gray: "#1E1E1E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest: '0.05em',
      },
    },
  },
  plugins: [],
} satisfies Config;
