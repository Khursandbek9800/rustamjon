/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          dark: "#1e40af",    // blue-800
        },
        secondary: {
          DEFAULT: "#f59e0b", // amber-500
          dark: "#b45309",    // amber-700
        },
      },
    },
  },
  plugins: [],
};
