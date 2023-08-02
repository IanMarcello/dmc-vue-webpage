/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
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
        theme: {
          50: 'var(--theme-colors-50)',
          100: 'var(--theme-colors-100)',
          200: 'var(--theme-colors-200)',
          300: 'var(--theme-colors-300)',
          400: 'var(--theme-colors-400)',
          500: 'var(--theme-colors-500)',
          600: 'var(--theme-colors-600)',
          700: 'var(--theme-colors-700)',
          800: 'var(--theme-colors-800)',
          900: 'var(--theme-colors-900)',
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
