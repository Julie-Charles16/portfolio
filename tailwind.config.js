module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'pt-responsive': '12', // par défaut pour mobile (1rem = 4px * 12 = 48px)
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pt-responsive': {
          paddingTop: '1rem', // mobile (48px)
        },
        '@screen sm': {
          '.pt-responsive': {
            paddingTop: '3rem', // sm → tablette (64px)
          },
        },
        '@screen md': {
          '.pt-responsive': {
            paddingTop: '4rem', // md → desktop (96px)
          },
        },
      })
    },
  ],
}
