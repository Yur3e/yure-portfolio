/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050505",
          soft: "#0a0a0a",
          panel: "rgba(7, 7, 7, 0.94)",
          accent: "#00d8a0",
          accentStrong: "#00f0c8",
          accentSoft: "rgba(0, 216, 160, 0.16)",
          muted: "#8f939d",
          mutedSoft: "#666a72",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      borderRadius: {
        panel: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};
