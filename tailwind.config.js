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
          purple: '#6366F1', // Indigo-500
          teal: '#2DD4BF',   // Teal-400
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #2DD4BF, #6366F1)',
        'gradient-brand-vertical': 'linear-gradient(to bottom, #2DD4BF, #6366F1)',
        'gradient-brand-radial': 'radial-gradient(circle at center, #2DD4BF, #6366F1)',
      },
    },
  },
  plugins: [],
} 