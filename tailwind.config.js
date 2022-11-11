module.exports = {
  content: [
    "public/*.html",
    "public/**/*.html",
    "public/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // https://imagecolorpicker.com/color-code/109848
        brand: {
          100: '#052e16', // 70% dark
          200: '#084c24', // 50% dark
          300: '#0a5b2b', // 40% dark
          400: '#0d7a3a', // 20% dark
          500: '#109848', // base color
          600: '#40ad6d', // 20% light
          700: '#70c191', // 40% light
          800: '#9fd6b6', // 60% light
          900: '#cfeada'  // 80% light
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
