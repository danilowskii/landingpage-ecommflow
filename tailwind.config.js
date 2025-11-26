// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx-tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 1. Montserrat já está correta
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10%px, -12%px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20%, 20%) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
