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
        "neon-cyan": "#00f5ff",
        "neon-blue": "#0080ff",
        "neon-purple": "#7b2fff",
        "dark-bg": "#050510",
        "dark-card": "#0d0d2b",
        "dark-border": "#1a1a4e",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 5px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff33",
        "neon-sm": "0 0 3px #00f5ff, 0 0 10px #00f5ff66",
        "neon-purple": "0 0 5px #7b2fff, 0 0 20px #7b2fff, 0 0 40px #7b2fff33",
        glow: "0 0 30px rgba(0, 245, 255, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "particle-float": "particleFloat 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px #00f5ff, 0 0 20px #00f5ff" },
          "50%": { boxShadow: "0 0 10px #00f5ff, 0 0 40px #00f5ff, 0 0 80px #00f5ff33" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        particleFloat: {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) translateX(100px)", opacity: "0" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
