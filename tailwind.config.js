// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {
        black: {
          light: '#2D2E2E',
          dark: '#2B2C2C',
          introLight: "#979899",
          introDark: "#292A2A"
        },
        grey: {
          light: '#323333',
          bgLight: '#a4a5a6'
        },
        primary: '#E0A80C',
        socialBg: '#323333'

      },
      textColor: {
        'primary': '#E0A80C',
        secondary: {
          'light': '#a4a5a6',
          'dark': '#858687'
        }


      },
      height: {
        0.5: '2px'
      }
    },
    variants: {

    },
    // https://github.com/tailwindcss/custom-forms
    plugins: [require("@tailwindcss/custom-forms")],
  }
};
