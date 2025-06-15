/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  // important: "#root",
  theme: {
    screens: {
      xs: '0px',
      // => @media (min-width: 0px) { ... }

      xxsm: '320px',
      // => @media (min-width: 320px) { ... }

      xsm: '440px',
      // => @media (min-width: 440px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      // => @media (min-width: 1280px) { ... }
      xl: { raw: '(min-height: 550px) and (min-width: 1280px)' },

      // => @media (min-width: 1380px) { ... }
      mxl: { raw: '(min-height: 680px) and (min-width: 1380px)' },

      // => @media (min-width: 1536px) { ... }
      '2xl': { raw: '(min-height: 750px) and (min-width: 1536px)' },

      // => @media (min-width: 1750px) { ... }
      '3xl': { raw: '(min-height: 850px) and (min-width: 1750px)' },

      // => @media (min-width: 2000px) { ... }
      '4xl': { raw: '(min-height: 1080px) and (min-width: 2000px)' }
    },
    extend: {
      maxWidth: {},
      colors: {
        cusBG: '#141415',
        cusOnyx: '#383838',
        cusEerieBlack: '#1F1F1F',
        cusGray: {
          DEFAULT: '#7D7D7D',
          100: '#D9D9D9',
          200: '#E1E1E1'
        },
        dark: {
          bg: '#1a1a1a',
          onyx: '#2c2c2c',
          eerieBlack: '#121212',
          gray: {
            DEFAULT: '#5a5a5a',
            100: '#b3b3b3',
            200: '#999999'
          }
        },
        light: {
          bg: '#ffffff',
          onyx: '#e0e0e0',
          eerieBlack: '#f5f5f5',
          gray: {
            DEFAULT: '#a0a0a0',
            100: '#f0f0f0',
            200: '#d0d0d0'
          }
        }
      },
      fontFamily: {},
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        '4xs': '0.4rem'
      }
    }
  },
  plugins: []
}

export default config
