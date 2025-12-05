import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        '50': '50px',
        '64': '64px',
      },
      colors: {
        gray: {
          100: '#7E92A5',
          200: '#52625D',
        },
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#43D0BB',
              100: '#D9FCEA',
              200: '#B4FADC',
              300: '#8CF0CE',
              400: '#6CE2C5',
              500: '#3FD0BA',
              600: '#2EB2AB',
              700: '#1F9195',
              800: '#146B78',
              900: '#0C5063',
            },
            success: {
              DEFAULT: '#6ABF24',
              100: '#EEFBD2',
              200: '#D9F8A7',
              300: '#B9EB78',
              400: '#97D854',
              500: '#6ABF24',
              600: '#51A41A',
              700: '#3B8912',
              800: '#286E0B',
              900: '#1A5B06',
            },
            danger: {
              DEFAULT: '#FF3D5D',
              100: '#FFE0D8',
              200: '#FFBAB1',
              300: '#FF8D8A',
              400: '#FF6D77',
              500: '#FF3D5D',
              600: '#DB2C59',
              700: '#B71E54',
              800: '#93134C',
              900: '#7A0B47',
            },
            warning: {
              100: '#FFF4D3',
              200: '#FFE6A6',
              300: '#FFD47A',
              400: '#FFC359',
              500: '#FFA723',
              600: '#DB8519',
              700: '#B76711',
              800: '#934C0B',
              900: '#7A3906',
            },
            secondary: {
              100: '#D0EDFF',
              200: '#A1D8FF',
              300: '#73BEFF',
              400: '#50A6FF',
              500: '#167FFF',
              600: '#1062DB',
              700: '#0B49B7',
              800: '#073393',
              900: '#04237A',
            },
          },
        },
      },
    }),
  ],
}
