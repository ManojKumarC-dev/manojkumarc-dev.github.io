/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3efe7",
        ink: "#16110f",
        muted: "#6f665f",
        accent: "#b46a4d",
        line: "rgba(22, 17, 15, 0.12)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        display: ["Cinzel", "serif"],
      },
      boxShadow: {
        panel: "0 18px 60px rgba(31, 24, 20, 0.08)",
      },
    },
  },
  plugins: [],
};
