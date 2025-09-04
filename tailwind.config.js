/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f53003',
          secondary: '#f0ede6',
        },
        black: {
          DEFAULT: '#000000',
          5: 'rgba(0, 0, 0, 0.05)',
          10: 'rgba(0, 0, 0, 0.1)',
          40: 'rgba(0, 0, 0, 0.4)',
          60: 'rgba(0, 0, 0, 0.6)',
          70: 'rgba(0, 0, 0, 0.7)',
        },
        white: {
          DEFAULT: '#ffffff',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          50: 'rgba(255, 255, 255, 0.5)',
          95: 'rgba(240, 237, 230, 0.95)',
        }
      },
      fontFamily: {
        'viola': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        'suisse-mono': ['Courier New', 'Consolas', 'Monaco', 'Andale Mono', 'monospace'],
        'suisse-bold': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}