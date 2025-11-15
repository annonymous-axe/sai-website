/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Steel Blue Theme
        primary: {
          DEFAULT: '#1F4E79',
          50: '#E8EFF6',
          100: '#C5D8E8',
          200: '#9DBFD9',
          300: '#75A6CB',
          400: '#4D8DBC',
          500: '#1F4E79',
          600: '#194063',
          700: '#13304D',
          800: '#0D2037',
          900: '#071021',
        },
        // Secondary Slate Gray
        secondary: {
          DEFAULT: '#4A5973',
          50: '#EEF0F3',
          100: '#D1D6E0',
          200: '#B3BCCD',
          300: '#95A2BA',
          400: '#7788A7',
          500: '#4A5973',
          600: '#3C475C',
          700: '#2E3545',
          800: '#20242E',
          900: '#121217',
        },
        // Accent Muted Amber
        accent: {
          DEFAULT: '#D9A441',
          50: '#FDF8EE',
          100: '#F9EDD0',
          200: '#F5E2B2',
          300: '#F1D794',
          400: '#EDCC76',
          500: '#D9A441',
          600: '#AE8334',
          700: '#836227',
          800: '#58411A',
          900: '#2D210D',
        },
        // Text Colors
        text: {
          primary: '#1A1A1A',
          secondary: '#4D4D4D',
          light: '#FFFFFF',
        },
        // Background Colors
        bg: {
          main: '#F8FAFC',
          alt: '#E3E8EF',
          card: '#FFFFFF',
        },
        // Utility colors
        border: 'hsl(214.3 31.8% 91.4%)',
        input: 'hsl(214.3 31.8% 91.4%)',
        ring: '#1F4E79',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 78, 121, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(31, 78, 121, 0.2)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-from-top': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in-95': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-in-90': {
          '0%': { transform: 'rotate(-90deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.5s ease-out',
        'zoom-in-95': 'zoom-in-95 0.3s ease-out',
        'spin-in-90': 'spin-in-90 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}