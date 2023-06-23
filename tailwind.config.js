/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      colors:{
          gray: {
            50: '#eaeaea',
            100: '#bebebf',
            200: '#9e9ea0',
            300: '#727275',
            400: '#56565a',
            500: '#2c2c31',
            600: '#28282d',
            700: '#1f1f23',
            800: '#18181b',
            900: '#121215',
          },
          blue:{
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554'
          }
        
      }
    },
  },
  plugins: [],
}
