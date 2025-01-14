/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6464",
        secondary: "#00A8CC",
        dark: "#21243D",
        blackDark: "#142850",
        light: "#8695A4",
      },
    },
  },
  plugins: [],
};