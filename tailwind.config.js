/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'karla': ['Karla', 'sans-serif'],
        'commissioner': ['Commissioner', 'sans-serif'],
        'kumbhsans': ['Kumbhsans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      backgroundColor: {
        'stone-150': 'rgb(238 237 237)',
        'yellow': '#FFEE32',
        'lightYellow': '#fff261'
      },
      colors: {
        'beige': 'rgb(240 237 240)',
        'light-black': '#2D2D34',
        'darkYellow': '#F7E201',
        'yellow': '#FFEE32',
        'lightYellow': '#fff261'
      },
      backgroundImage: {
        'contact-background': 'url("assets/prof2.JPG")'
      },
      lineHeight: {
        '6.5': '26px'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': 'inset 0px 0px 150px 20px rgba(0, 0, 0, 0.7)',
      },
      // content: {
      // 'sun': 'url("./src/icons/sun.svg")',
      // 'moon': 'url("./src/images/moon.png")'
      // }
    },
  },
  plugins: [],
}
