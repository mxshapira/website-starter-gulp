// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        black: '#111',
        gray: {
          100: '#EEEFF0',
          200: '#D5D6D8',
          300: '#BCBDC1',
          400: '#8A8C93',
          500: '#585A64',
          600: '#4F515A',
          700: '#35363C',
          800: '#28292D',
          900: '#1A1B1E',
        },
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '9/12': '75%',
        '11/12': '91.666667%',
      },
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
  plugins: [],
}
