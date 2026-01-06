import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD200',
        muted: '#777777',
        surface: '#ffffff',
        border: '#e5e7eb',
        text: '#0f172a'
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'Plus Jakarta Sans', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        sm: '6px'
      }
    }
  },
  plugins: []
};

export default config;
