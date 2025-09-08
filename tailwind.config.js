/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0a3d62", light: "#38ada9", dark: "#082c48" },
        secondary: { DEFAULT: "#f78fb3" },
        accent: { DEFAULT: "#78e08f" },
      },
    },
  },
  plugins: [],
};
