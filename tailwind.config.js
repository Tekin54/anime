const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        inherit: 'inherit',
        transparent: 'transparent',
      },
    },
    colors: {
      emerald: colors.emerald,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      indigo: colors.indigo,
      teal: colors.teal,
      orange: colors.orange,
      cyan: colors.cyan,
      lime: colors.lime,
      amber: colors.amber,
    },
  },
  plugins: [],
};
