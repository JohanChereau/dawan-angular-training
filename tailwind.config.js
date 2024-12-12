/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit-150": "repeat(auto-fit, minmax(140px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
