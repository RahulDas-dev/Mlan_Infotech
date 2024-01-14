module.exports = {
  content: ['./index.html','./src/index.ts','./src/partials/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito,sans-serif"],
      },
      colors: {
        prime: "#5267DF",
        second: "#9194A2",
        "prime-100": "#9ba0c7",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

