/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#3B4D66",
        "dark-navy": "#313E51",
        circles: "#2D3949"
      },
      spacing: {
        'answerWidth': '35rem'
      }
    },
  },
  plugins: [],
};
