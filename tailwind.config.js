/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmc: ["DMC5Font"],
        'montserratalternates-thin': ["MontserratAlternates-Thin"],
        'montserratalternates-extralight': ["MontserratAlternates-ExtraLight"],
        'montserratalternates-light': ["MontserratAlternates-Light"],
        'montserratalternates-regular': ["MontserratAlternates-Regular"],
        'montserratalternates-medium': ["MontserratAlternates-Medium"],
        'montserratalternates-semibold': ["MontserratAlternates-SemiBold"],
        'montserratalternates-bold': ["MontserratAlternates-Bold"],
        'montserratalternates-extrabold': ["MontserratAlternates-ExtraBold"],
        'montserratalternates-black': ["MontserratAlternates-Black"],
      },
    },
  },
  plugins: [],
}
