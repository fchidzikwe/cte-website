/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cte: {
          primary: '#106B3F',
          secondary: '#12A150',
          accent: '#F5C84B',
          info: '#0EA5E9',
          ink: '#111827',
          slate: '#374151',
          ash: '#6B7280',
          mist: '#F3F4F6',
          card: '#FFFFFF',
          cardDark: '#0B0F14'
        }
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [],
}
