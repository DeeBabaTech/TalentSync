/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        arrow: "url('./assets/HandArrow.png')",
        stars: "url('./assets/Stars.png')",
      },
    },
  },
  plugins: [],
};
