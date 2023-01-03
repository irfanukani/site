/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./@components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#f8fafc",
        yellow: {
          light: "#facc15",
          dark: "#eab308",
        },
      },
    },
  },
  plugins: [],
};
