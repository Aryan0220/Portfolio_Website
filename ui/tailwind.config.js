/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  plugins: ["prettier-plugin-tailwindcss"],
  content: ["./src/**/*.{js,jsx}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      textUnderlineOffset: {
        0.5: "0.5rem",
      },
      fontSize: {
        "2xl": "1.4rem",
        "4xl": "2.2rem",
        resume: "1.05rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        3: "3px",
      },
      padding: {
        "8px": "8px",
      },
    },
  },
  plugins: [],
};
