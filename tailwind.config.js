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
      },
      colors: {
        dark: {
          50: '#0081c6',
          100: '#0073b0',
          200: '#00649a',
          300: '#005684',
          400: '#00486e',
          450: '#003049',
          500: '#003958',
          600: '#002b42',
          700: '#001d2c',
          800: '#000e16',
          900: '#000000'
        },
        theme: {
          50: '#101217',
          100: '#16191f',
          200: '#cd3232',
          300: '#282a34',
          400: '#2d3035',
          500: '#449ca2',
          600: '#e63f33',
          700: '#111216',
          800: '#111317',
          900: '#101316',
        }
      }
    },
    screens: {
      '3xl': '1760px',
      '4xl': '2000px'
    }
  },
  plugins: []
}
