/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495E57",
        lemon: " #F4CE14",
        price: "#EE9972",
        hightlight: {
          light: "#EDEFEE",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
