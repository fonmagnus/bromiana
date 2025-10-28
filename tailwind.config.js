module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f6d756',
        secondary: '#1C1C28',
        tertiary: '#da9c20',
        navy: '#28293D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
