/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1C2D',
          light: '#152A40',
          dark: '#050E17',
        },
        teal: {
          DEFAULT: '#00C9A7',
          light: '#33D4B9',
          dark: '#00A085',
        },
        cyan: {
          DEFAULT: '#00F5FF',
          light: '#33F7FF',
          dark: '#00C3CC',
        },
        'soft-white': '#F8FAFC',
        'muted-gray': '#94A3B8',
        'roi-green': '#22C55E',
        'alert-orange': '#F97316',
        'insight-purple': '#8B5CF6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'draw-circle': 'drawCircle 0.6s ease-out forwards',
        'draw-check': 'drawCheck 0.4s 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0, 201, 167, 0.4)' },
          '50%': { opacity: '.8', boxShadow: '0 0 0 10px rgba(0, 201, 167, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00C9A7' },
        },
        drawCircle: {
          '0%': { strokeDasharray: '0, 100' },
          '100%': { strokeDasharray: '100, 100' },
        },
        drawCheck: {
          '0%': { strokeDasharray: '0, 100' },
          '100%': { strokeDasharray: '100, 100' },
        },
      },
    },
  },
  plugins: [],
}
