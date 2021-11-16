module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'pattern': 'url(../images/bg-pattern-top.svg), url(../images/bg-pattern-bottom.svg)',
      },
      backgroundPosition: {
        'pattern-pos': 'right 45vw bottom 25vw, left 47vw top 23vw'
      },
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
