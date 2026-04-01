import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A3626",
        secondary: "#345942",
        accent: "#1A3626",
        "accent-light": "#254d36",
        cta: "#1A3626",
        background: "#FFFFFF",
        foreground: "#1A3626",
        muted: "#5B7565",
        "muted-light": "#A1B4A9",
        border: "#E9EFEA",
        "border-dark": "#D1DDD6",
        cream: "#E5ECE7",
        "warm-white": "#F4F7F4",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "hero-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "section-title": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "section-subtitle": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "soft": "0 2px 15px rgba(0,0,0,0.04)",
        "card": "0 4px 20px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.1)",
        "elevated": "0 10px 40px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
