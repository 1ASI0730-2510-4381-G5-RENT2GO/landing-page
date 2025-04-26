/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eaf2ff',
          100: '#cce2ff',
          200: '#99c4ff',
          300: '#66a6ff',
          400: '#3388ff',
          500: '#006aff',
          600: '#005ce0',
          700: '#004dbf',
          800: '#003f9f',
          900: '#003080',
        },
        secondary: {
          50: '#F4F7FF',
          100: '#E9EFFD',
          200: '#D4DFFA',
          300: '#BECEF8',
          400: '#A9BEF5',
          500: '#93ADF3',
          600: '#7A8AC2',
          700: '#616892',
          800: '#484561',
          900: '#2E2331',
        },
        dark: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#1C1C25',
          600: '#19191F',
          700: '#151519',
          800: '#121214',
          900: '#0E0E0F',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}