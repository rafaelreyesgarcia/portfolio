/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#395B64',
        'secondary': '#A5C9CA',
        'dark': '#2C3333',
        'light': '#E7F6F2',
        'accent': '#B00B40',
        'skeleton': '#D9D9D9',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

