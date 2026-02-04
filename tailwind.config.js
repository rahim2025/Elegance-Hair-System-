/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1B3A5C',
          'deep-navy': '#0F2642',
          'light-blue': '#E8F1F8',
          gold: '#C9A55A',
          'bright-gold': '#D4AF37',
          white: '#FFFFFF',
          'off-white': '#F5F7FA',
          'light-gray': '#E5E7EB',
          'dark-text': '#1F2937',
        },
        secondary: {
          gold: '#C9A55A',
          'bright-gold': '#D4AF37',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 165, 90, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 165, 90, 0.8)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
