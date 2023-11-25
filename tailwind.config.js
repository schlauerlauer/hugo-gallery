/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen','Ubuntu','Fira Sans','Droid Sans','Helvetica Neue','sans-serif']
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
