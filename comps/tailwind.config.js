/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // safelist: [
  //   { pattern: /bg-./ },
  //   { pattern: /text-./ },
  //   { pattern: /border-./ },
  // ],
  theme: {
    extend: {},
  },
  plugins: [],
}

