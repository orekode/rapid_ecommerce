/** @type {import('tailwindcss').Config} */

import * as colors from 'tailwindcss/colors'

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {

    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      yellowy: "#ffa436"
    },

    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),],
}

