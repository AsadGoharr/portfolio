module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#94a3b8",
        tertiary: "#0c0c12",
        violet: "#ffffff",
        cyan: "#a0a0a0",
        emerald: "#d0d0d0",
      },
      screens: { xs: "450px" },
    },
  },
  plugins: [],
};
