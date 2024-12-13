/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '50': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '50': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    colors: {
      'vermelho': '#B60505',
      'bg': '#FFF6E0',
      'amarelo': '#FCC436',
      'cinza': '#797D86',
    },
  },
  plugins: [],
};
