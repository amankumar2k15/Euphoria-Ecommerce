// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "#3C4242",
        darkBlack: "#333333",
        mediumBlack: "#807D7E",
        purpleColor: "#8A33FD",
        darkGray: "#BEBCBD",
        mediumGray: "#F6F6F6",
        lightGray: "#FFFFFF",
        greenColor: "#34A853"
      },
    },
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    red: colors.red,
    yellow: colors.amber,
    green: colors.emerald,
    blue: colors.blue,
    indigo: colors.indigo,
    purple: colors.purple,
    pink: colors.pink,
  },
  fontFamily: {
    titleFont: ["Poppins", "sans-serif"],
  },
  boxShadow: {
    'darkblack': '8px 8px 20px rgba(0, 0, 0, 1)',
  },
  plugins: [],
};