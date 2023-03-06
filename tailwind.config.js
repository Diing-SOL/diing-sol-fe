/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5ACE",
        secondary: "#3A3A41",
        tertiary: "#F7F7F9",
        quaternary: "#2653C5",

        humaYellow: "#FBF5EC",
        humaPrimary: "#D757C6",
        humaSecondary: "B748F7",

        diingPrimary: "#347DE2",
        diingSecondary: "#2653C5",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
