/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        lg: '1000px',
        xl: '1550px',
      },
    },
  },
  plugins: [],
};
