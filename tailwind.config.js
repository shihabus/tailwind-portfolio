const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        night: "#151515",
        dusk: "#202022",
        dawn: "#949495",
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
