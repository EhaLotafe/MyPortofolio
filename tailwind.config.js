/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#003B5C',
        blue: '#007EA7',
        teal: '#00A8C6',
        green: '#57B66F',
        dark: '#1A1A1A',
        light: '#F7F9FA',
        gold: '#DAA520'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        title: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
