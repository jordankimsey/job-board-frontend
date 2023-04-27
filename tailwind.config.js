
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/images/bg-header-desktop.svg')",
        'hero-mobile': "url('/images/bg-header-mobile.svg')"
      },
      colors: {
        cyan: {
          // /* Neutral (Filter Tablets) */
          100: '#eef6f6',
          // /* Neutral Background */
          200: '#effafa',
          // /* Desaturated Dark Cyan */
          500: '#5ba4a4',
          // --gray-cyan
          700: '#7b8e8e',
          // --dark-cyan
          900: '#2c3a3a',
        },
      },
    },
  },
  plugins: [],
};
