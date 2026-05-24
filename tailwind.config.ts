import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Arabic: IBM Plex Sans Arabic — clean, modern, excellent for Arabic industrial content
        arabic: ["var(--font-arabic)", "sans-serif"],
        // English: Syne — geometric, modern, distinctive for industrial tech
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#edfcff",
          100: "#d6f5ff",
          200: "#a5ecff",
          300: "#63e0ff",
          400: "#18c9f5",
          500: "#00aedb",  // primary brand cyan
          600: "#008cb8",
          700: "#006f95",
          800: "#005a79",
          900: "#004a66",
          950: "#002e45",
        },
        dark: {
          900: "#070d14",
          800: "#0c1520",
          700: "#111e2e",
          600: "#162539",
          500: "#1c2e47",
        },
        accent: "#00f0c8",   // teal-green accent
        warn:  "#f59e0b",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(0,174,219,0.15) 1px, transparent 0)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "scan":       "scan 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(0%)", opacity: "0.6" },
          "50%":       { transform: "translateY(100%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
