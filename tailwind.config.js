/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand system (semantic tokens)
        brand: {
          DEFAULT: '#E10600', // main brand color
          hover: '#C70500',   // subtle darken on hover
          soft: '#FFE8E7',    // optional subtle accent background (tint)
        },
        ink: {
          DEFAULT: '#111111', // dark neutral / near-black
          soft: '#1A1A1A',
        },
        surface: {
          DEFAULT: '#F5F5F5', // light background for alternating sections
          soft: '#EFEFEF',
        },

        // Backward compatible aliases (existing usage in codebase)
        primary: {
          DEFAULT: '#E10600',
          dark: '#B80500',
          light: '#FF1A0D',
        },
        dark: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
          lighter: '#262626',
        },
        neutralSurface: {
          DEFAULT: '#F5F5F5',
          light: '#EFEFEF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.95',
            transform: 'scale(1.01)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
