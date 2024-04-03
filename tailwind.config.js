module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // files to scan for classes
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        16: "1rem", // make the base font size 16px
      },
      backgroundColor: {
        "main-bg": "#FAFBFB", // color=gray-100
        "main-dark-bg": "#20232A", // color=gray-900
        "secondary-dark-bg": "#33373E", // color=gray-800
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        hero: "url(/mountain-cover.jpg)",
      },
    },
  },

  plugins: [],
};
