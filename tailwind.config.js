/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF9001",
          100: "#ffe1b9",
          200: "#ffcc8b",
          300: "#ffb85d",
          400: "#ffa42e",
          500: "#ff9000",
          600: "#ef8700",
          700: "#a25b00",
          800: "#744100",
          900: "#462700",
        },
        background: "#232323",
      },
    },
  },
}
