/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Greenstone-inspired colors (institutional library feel)
        'library': {
          50: '#f0f7f4',
          100: '#e0f0e8',
          200: '#c1dfd1',
          300: '#a2cebb',
          400: '#83bea4',
          500: '#64ad8d', // Primary
          600: '#4f8a6f',
          700: '#3a6751',
          800: '#255a39',
          900: '#1a3f26',
        },
        // Airbnb-inspired vibrant accent
        'primary': {
          50: '#fff5f1',
          100: '#ffeae2',
          200: '#ffd5c5',
          300: '#ffbfa8',
          400: '#ffaa8b',
          500: '#ff6b35', // Airbnb-inspired coral
          600: '#e65a28',
          700: '#cc491b',
          800: '#b2380e',
          900: '#982701',
        },
        // KYU Space-inspired blues (analytics/data)
        'accent': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
      },
      backgroundImage: {
        'gradient-airbnb': 'linear-gradient(135deg, #ff6b35 0%, #ffd700 100%)',
        'gradient-library': 'linear-gradient(135deg, #64ad8d 0%, #0ea5e9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a3f26 0%, #0c3d66 100%)',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
