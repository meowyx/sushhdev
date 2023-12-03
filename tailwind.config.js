/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#02000F",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(113deg, rgba(6, 3, 23, 0.51) 3.51%, rgba(6, 3, 23, 0.00) 111.71%)",
      },
      boxShadow: {
        card: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      backdropFilter: {
        blur: "blur(32px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
