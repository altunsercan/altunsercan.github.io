/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      },
      inset: {
        '-16': '-4rem',
        '-32': '-8rem',
        '-64': '-16rem',
        '-128': '-32rem',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',
        form: 'var(--bg-background-form)',
      },
      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-secondary)',
      },
      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      green: {
        100: '#f7f8fa',
        200: '#e1e5e9',
        300: '#c4cdd5',
        400: '#919eab',
        500: '#637381',
        600: '#454f5b',
        700: '#212b36',
        800: '#161c24',
        900: '#0c1419',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
