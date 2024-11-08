/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txtblack': '#565656',
        'golerly' : '#9266F5',
        'pjctblue': '#6EA6FF',
        'actgrey' : '#B3ABAB',
        'newblue' : '#6EA6FF',
        'inprog'  : '#BFC5D2',
        'doneblu' : '#C9DEFF',
        'plnng'   : '#FDD13A47',
        'lgtgrey' : '#F5F5F5',
      },
      height: {
        'in-screen': 'calc(100vh - 58px)',
      }
    },
  },
  plugins: [],
}

