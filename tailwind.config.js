const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxsm: "375px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    borderWidth: {
      10: "10px",
      15: "15px",
    },
    rotate: { 
      '12': "12deg" ,
      '-12': "-12deg" ,
      '-18': "-18deg" ,
      '18': "18deg" ,
      '25': "25deg" ,
      '30': "30deg" ,
      '45': "45deg" 
    },
    extend: {
      screens: {},
      colors: {
        red: "#d71d24",
        pink: " #FF8CF0",
        black: "#2a2c2a",
        yellow: "#fdd040",
        orange: "##E5E5E5",
        skin: "#ffeed8",
        blue: "#006EFF",
        darkBlue:'#0263E6',
        gray: '#F7F7F9',
        space: '#2D3339',
        green:'#31FFC1',
        portfolioGrey:'#F2F2F2',
        dhBlack: '#343B46'
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem !important;",
      },
      height: {
        wFull: "100vw",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '30vh': "30vh",
        '32': "34vw",
        '370': "370px",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "343": "343px",
        "400": "400px",
        "462px": "462px",
      },
      maxWidth: {
        '1240': '1240px',
      },
      padding: {
        '140': '140%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
       },
      inset: {
        '1/20': '5%',
        '1/10': '10%',
        '-1/10': '-10%',
        '1/6': '16%',
        '1/5': '20%',
        '-1/5': '-20%',
        '-2/5': '-40%',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '8/12': '66%',
       },
       margin: {
        '-1/2': '-50%',
        '-2/5': '-40%',
        '-1/3': '-30%',
        '-1/4': '-25%',
        '-1/6': '-15%',
        '-1/10': '-10%',
        '-1/20': '-5%',
        '1/6': '15%',
        '1/2': '50%',
        '3/5': '60%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '19%': '19%',
       },
       fontSize: {
        '7.5xl': '5rem',
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        '14vw': '14vw',
        '24px': '24px'
       },
       zIndex: {
        '-1': '-1',
       },
       rotate: {
        '90': '90deg',
        '180': '180deg',
      },
      transitionDelay: {
        '20': '20ms',
        '2000': '2000ms',
      }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderRadius: {
      '48px': '48px',}
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus"],
      borderWidth: ['hover', 'focus'],
      translate: ['group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
}
