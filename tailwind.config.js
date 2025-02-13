/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ajusta las rutas a tus archivos .astro, .jsx, .tsx, etc.
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Definimos nombres que usaremos en las clases:
        waterfall: ['Waterfall', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
