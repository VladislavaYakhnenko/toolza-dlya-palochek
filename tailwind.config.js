const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '540px'
    },
    colors: {
      'white': '#ffffff',
      gray: colors.gray,
      lime: colors.lime,
      fuchsia: colors.fuchsia,
      slate: colors.slate,
      indigo: colors.indigo
    },
    extend: {
      fontfamily: {
        'mont': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}