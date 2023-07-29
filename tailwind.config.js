/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    fontFamily: {
      'Mukta': ["Mukta", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Tilt: ['"Tilt Neon"', "cursive"],
      Titillium:['"Titillium Web"', "sans-serif"],
      // 'Libre': ['"Libre Baskerville"', "serif"],
      // 'Yeseva':['"Yeseva One"']
      // 'libre-baskerville': ['Libre Baskerville', 'serif'],
        // 'yeseva': ['Yeseva One', 'cursive'],
        'Open':[ '"Open Sans"', 'sans-serif']
    },
  },
  plugins: [],
};
