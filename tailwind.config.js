/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1024px',
      desktopLarge: '1170px',
      wide: '1280px',
    },
    colors: {
      red: '#ee0000',
      orange: '#E09A21',
      yellow: '#F4CD2A',
      yellowLight: '#FFF6DF',
      green: '#6DB133',
      'green-dark': '#508525',
      blue: '#0477D0',
      'almost-white': '#F8F8F8',
      white: '#ffffff',
      black: '#282D32',
      'gray-very-light': '#F4F4F5',
      'gray-light': '#E7E7E7',
      gray: '#ADADAD',
      'gray-dark': '#666666',
      transparent: 'transparent',
    },
    fontSize: {
      xxs: '0.6875rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.750rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      screens: {
        mobile: '100%',
        tablet: '100%',
        desktop: '100%',
        wide: '1845px',
      },
    },
    extend: {
      width: {
        128: '32rem',
        '11/20': '55%',
      },
      minWidth: {
        40: '10rem',
        96: '20rem',
        120: '30rem',
      },
      spacing: {
        18: '4.5rem',
        6.5: '1.625rem',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(160px, 1fr))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
