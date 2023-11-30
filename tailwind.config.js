/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",    "./index.html"],
  theme: {
    extend: {
      spacing: {
        '58': '14.2rem',
        '68': '17rem',
        '73': '18.5rem',
        '104': '26rem',
        '128': '32rem',
      },
      colors: {
        'primary-red': '#D10B04',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
    }
  },
  plugins: [require('postcss-nesting'),require("flowbite/plugin"), require('tailwindcss'),
  require('autoprefixer'),],
}