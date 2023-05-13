/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkGreen: "#1b2b1c",
      lightGreen: "#BFF101",
      black: "#050505",
    },
    fontFamily: {
      heading: ["Bold"],
      text: ["Normal"],
      textBold: ["Medium"],
      textSemiBold: ["SemiBold"],
    },
  },
  plugins: [],
};
