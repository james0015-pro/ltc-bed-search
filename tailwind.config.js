/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#08090a',
        surface: '#0f1011',
        'surface-hover': '#1a1b1e',
        border: '#222327',
        'border-subtle': '#1a1b1c',
        primary: '#10b981',
        'primary-subtle': 'rgba(16,185,129,0.12)',
        'text-primary': '#f7f8f8',
        'text-secondary': '#d0d6e0',
        'text-muted': '#6b7280',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
