/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dmc: ['DMC5Font', 'sans-serif'],
        xbox: ['X360', 'sans-serif'],
        steam: ['Steam', 'sans-serif'],
        steam_medium: ['Steam_Medium', 'sans-serif'],
        steam_bold: ['Steam_Bold', 'sans-serif'],
        steam_black: ['Steam_Black', 'sans-serif'],
        playstation_regular: ['PS_Regular', 'sans-serif']
        // 'montserratalternates-thin': ['MontserratAlternates-Thin', 'sans-serif'],
        // 'montserratalternates-extralight': ['MontserratAlternates-ExtraLight', 'sans-serif'],
        // 'montserratalternates-light': ['MontserratAlternates-Light', 'sans-serif'],
        // 'montserratalternates-regular': ['MontserratAlternates-Regular', 'sans-serif'],
        // 'montserratalternates-medium': ['MontserratAlternates-Medium', 'sans-serif'],
        // 'montserratalternates-semibold': ['MontserratAlternates-SemiBold', 'sans-serif'],
        // 'montserratalternates-bold': ['MontserratAlternates-Bold', 'sans-serif'],
        // 'montserratalternates-extrabold': ['MontserratAlternates-ExtraBold', 'sans-serif'],
        // 'montserratalternates-black': ['MontserratAlternates-Black', 'sans-serif']
      }
    },
    screens: {
      '3xl': '1600px'
    }
  },
  plugins: []
}
