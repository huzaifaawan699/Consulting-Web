/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      // You can extend the theme here
      maxHeight: {
        '40': '10rem', // Adjust as needed
      },
    },
  },
  plugins: [],
};
