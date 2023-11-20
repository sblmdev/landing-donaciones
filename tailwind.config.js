/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
      'xs': '200px', // Customize as needed
      },
  },
  },
  plugins: [],
  
}