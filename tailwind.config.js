/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      minHeight: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
