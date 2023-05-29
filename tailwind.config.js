/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            visibility: 'visible',
            top: '19rem'
            
          },
          '100%':  {
            visibility: 'visible',
            top: '15rem'
            
          },
        }
      },
      animation: {
        slideup: 'slide 1s ease-in-out 1s',
      }
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    colors:{
      deepBlue:'rgb(10,25,45)',
      white:'rgb(255 255 255)',
      orangeLogo:'rgb(156,58,47)',
      blacktransp:'rgba(0,0,0,0.5)',
      black:'rgb(0,0,0)',
      lightBlue:'rgb(72,140,147)',
      registerBlue:'rgb(99,189,251)',
      resetBlue:'rgb(100,165,255)',
      orangeRed:'rgb(255,69,0)'

    },
  },
  plugins: []
}
