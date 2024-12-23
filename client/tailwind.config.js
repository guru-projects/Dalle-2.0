// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      'primary-text': '#27272A',
      'secondary-text': '#52525B',
      'primary-light': '#F4F4F5',
      'secondary-light': '#D4D4D8',
      'primary-dark': '#0E0E10',
      'secondary-dark': '#18181B',
      'card-bg': '#f3f1ff',
      'primary-border': '#baaaff',
      'dark-border': '#27272A',
      'light-border': '#D4D4D8',
      'blue': {
        50: '#f3f1ff',
        100: '#eae6ff',
        200: '#d7d0ff',
        300: '#baaaff',
        400: '#997aff',
        500: '#7a45ff',
        600: '#6b1fff',
        700: '#5f10f4',
        800: '#4e0acd',
        900: '#410ba7',
        950: '#250372',
      },
    },
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
};
