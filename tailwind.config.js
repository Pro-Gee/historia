/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5940E1',
          lighter: '#DED9F9',
          lightest: '#F8F6FF'
        },
        tertiary: '#E2FDFF',
        dark: {
          3: '#929292',
          4: '#1F2937'
        },
        red: {
          DEFAULT: '#FE5338'
        },
        yellow: {
          DEFAULT: '#FCB406'
        },
        light: {
          2: '#EBEBF0',
          3: '#6B7280',
        }
      },
      container:{
        center: true
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      }
    },
  },
  plugins: [],
}

