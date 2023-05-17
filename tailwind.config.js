/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColors: {
          100: '#C6EBAB',
          200: '#E5F5B3 ',
          300: '#DFDDAE',
          400: '#F5ECB3',
          500: '#EBDCAB',
        },
        secondaryColors: {
          400: '#5D402A',
          500: '#422E1E',
        },
        complementaryColors: {
          300: "#3C7F72",
          400: "#992800",
          500: "#D34A24",
          600: "#BF8300",
        },
        'customBlue': '#6C8EBF',
        'customGreen': '#95B96A',
        'customPurple': '#A87CA0',
        'customRed': '#C85D5D',
      },
    },
  },
  plugins: [],
}