export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        mist: {
          DEFAULT: '#f4f3f1',
          200: '#ebe9e6',
          400: '#d8d5d0',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          800: '#1b1b1b',
          600: '#4b4b4b',
          400: '#8a8a8a',
        },
        sand: '#b08d57',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.038em',
      },
      maxWidth: {
        shell: '78rem',
      },
      borderRadius: {
        panel: '28px',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(10,10,10,0.04), 0 12px 32px -12px rgba(10,10,10,0.10)',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
