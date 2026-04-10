/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'popx-purple': '#6C25FF',
        'popx-light-purple': '#CBC3E3',
        'popx-gray-btn': '#D1D5DB',
        'popx-bg': '#F7F8F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}