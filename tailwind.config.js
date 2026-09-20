/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EBE2D8',
          400: '#DECFC0',
        },
        blush: {
          50: '#FDF8F8',
          100: '#FAECEF',
          200: '#F5E6E8',
          300: '#ECCDD3',
          400: '#DFADB6',
          500: '#D4A5A5',
        },
        rose: {
          50: '#FAF0F2',
          100: '#F4DDE2',
          200: '#EABEC7',
          300: '#DC96A4',
          400: '#CC6C82',
          500: '#B84D67',
          600: '#9B3950',
          700: '#7E2B40',
          800: '#682436',
          900: '#541D2B',
        },
        wine: {
          500: '#6B2D3E',
          600: '#5A2232',
          700: '#4A1521',
          800: '#380E18',
          900: '#26060E',
          950: '#160207',
        },
        champagne: {
          50: '#FDFBF7',
          100: '#FAF5EA',
          200: '#F3E8D0',
          300: '#E8D5AE',
          400: '#DAC18C',
          500: '#C7A765',
          600: '#AB8B46',
        },
        night: {
          800: '#1A0B12',
          850: '#14070D',
          900: '#0E0408',
          950: '#070204',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', '"Caveat"', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

