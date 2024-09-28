/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      'xs': '0.625rem',
      'sm': '0.75rem',
      'md': '0.8125rem',
      'base': '0.875rem',
      'lg': '1rem',
      'xl': '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '6rem',
      '10xl': '8rem'
    },
    fontFamily: {
      libreFranklin: `"Libre Franklin", sans-serif`,
      roboto: `"Roboto", sans-serif`,

    },
    screens: {
      sm: '600px',
      md: '819px',
      lg: '1280px',
      xl: '1440px'
    },
    extend: {
      animation: {
        'bounce-one-second': 'bounce 2s 0s'
      },
      keyframes: {
        bounce: {
          '0% 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        }
      },
      colors: {
        primary : {
          50  :  "#e8f0fe",
          60 : "#E9F2FF",
          100 :  "#c6dafc",
          200 :  "#a1c2fa",
          300 :  "#7baaf7",
          400 :  "#5e97f6",
          450 :  "#4285F4",
          500 :  "#4285f4",
          600 :  "#3c7df3",
          700 :  "#3372f1",
          800 :  "#2b68ef",
          900 :  "#1d55ec",
          a100:  "#ffffff",
          a200:  "#eef2ff",
          a400:  "#bbcbff",
          a700:  "#a1b8ff",
          DEFAULT: "#4285f4",
        },
        accent : {
          50 :  "#faefe2",
          100:  "#f4d7b6",
          200:  "#ecbc86",
          300:  "#e4a155",
          400:  "#df8d30",
          500:  "#d9790c",
          600:  "#d5710a",
          700:  "#cf6608",
          800:  "#ca5c06",
          900:  "#c04903",
          a100: "#fff0e9",
          a150: '#FDECEC',
          a200: "#ffcdb6",
          a400: "#ffa983",
          a700: "#ff9869",
          DEFAULT: "#d9790c",
        },
        warn : {
          50 :  "#fde9ec",
          100:  "#fbc7d0",
          200:  "#f8a2b0",
          300:  "#f57c90",
          400:  "#f26079",
          500:  "#f04461",
          600:  "#ee3e59",
          700:  "#ec354f",
          800:  "#e92d45",
          900:  "#e51f33",
          a100: "#ffffff",
          a200: "#ffe8ea",
          a400: "#ffb5bb",
          a700: "#ff9ca4",
          DEFAULT: "#f04461",
        },
        contrast : {
          50 : "#000000",
          100 : "#000000",
          200 : "#000000",
          300 : "#000000",
          400 : "#000000",
          500 : "#000000",
          600 : "#000000",
          700 : "#ffffff",
          800 : "#ffffff",
          900 : "#ffffff",
          A100 : "#000000",
          A200 : "#000000",
          A400 : "#000000",
          A700 : "#000000",
          DEFAULT: "#000000",
        },
        success: {
          50 : "#e8fbf0",
          100 : "#c6f4d8",
          200 : "#a0edbf",
          300 : "#7ae5a5",
          400 : "#5ee091",
          500 : "#41da7e",
          600 : "#3bd676",
          700 : "#32d06b",
          800 : "#2acb61",
          900 : "#1cc24e",
          a100 : "#f8fffa",
          a200 : "#c5ffd5",
          a400 : "#92ffb0",
          a700 : "#79ff9d",
        }
      }
    },
    custom: {
      'dark-green': 'rgba(2, 122, 72, 0.1)',
      'mlColor': "#1A4168",
      
    },
  
  },
  plugins: [
    
  ],
}

