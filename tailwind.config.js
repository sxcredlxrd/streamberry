/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#0D0D0D",
          2: "#121212",
          3: "#E50914",
          4: "#aa0d16",
          5: "#29D626",
          6: "#747474",
        },
        stroke: {
          1: "#252525",
          2: "#C1C1C1",
        },
        n: {
          1: "#FFFFFF",
          2: "#C1C1C1",
          3: "#353535",
          4: "#252525",
          5: "#747474",
        },
      },
      fontFamily: {
        geo: "var(--font-geo)",
        bebas: "var(--font-bebas)",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
