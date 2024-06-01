/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        raleway: ['Raleway'],
        montserrat: ['Montserrat'],
        unbounded: ['Unbounded'],
        paytone: ['Paytone One'],
        poiret: ['Poiret One'],
        league: ['League Spartan'],
        macondo: ['Macondo'],
        questrial: ['Questrial'],
        major: ['Major Mono Display'],
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/Users/andresog/Documents/Restaurante/restaurante-frontend/src/assets/img/fondo6.svg')",
      },
      spacing: {
        '100': '32rem',
        '101': '36rem',
        '102': '40rem',
      },
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};

