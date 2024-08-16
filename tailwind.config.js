/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['Great Vibes', 'cursive'],
        gabriela: ['Gabriela', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

