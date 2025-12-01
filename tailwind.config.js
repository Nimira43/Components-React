/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        prime: '#ff4500',
        support: '#008080',
        light: '#fff',
        dark: '#000',
        'grey-1': '#ccc',
        'grey-2': '#eee',
        forest: '#228b22',
        alert: '#ffd700',
        blaze: '#b41818',
        inform: '#0f65cf'        
      },
    },
  },
  plugins: [],
}

