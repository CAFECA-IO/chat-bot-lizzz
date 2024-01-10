import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
