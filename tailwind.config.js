/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/Menbg.jpg')",
      },
    },
  },
  plugins: [],
};
