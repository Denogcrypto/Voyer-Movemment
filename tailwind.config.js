/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lofi: {
          // Tonos principales cálidos apagados
          cream: '#E8DCC4',
          sand: '#D4B896',
          terracota: '#C8997A',
          rust: '#A87860',
          // Backgrounds
          bg: '#F5F1E8',
          card: '#EDE6D6',
          dark: '#3A3530',
          // Textos
          textPrimary: '#4A4039',
          textSecondary: '#736B5E',
          textLight: '#9B8F7E',
          // Acentos
          orange: '#D99A6C',
          peach: '#E5B299',
          brown: '#8B6F47',
          // Estados
          hover: '#C4A57B',
          disabled: '#B8AFA0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      borderRadius: {
        'lofi': '8px',
      },
    },
  },
  plugins: [],
}
