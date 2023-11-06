/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#120437",
      },
      boxShadow: {
        shadowOne: "2px 2px 10px black, 5px 5px 19px #230967",
      },
    },
  },
  plugins: [],
};

