/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        cosmic: "#0b0f1a",
        nebula: "#6d5dfc",
        solar: "#facc15",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

