/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      orange: {
        DEFAULT: "#f7ab0a",
        50: "#fffceb",
      },
    }),
    extend: {
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite", // Customize the duration here (e.g., 2s)
        "ping-fast": "ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite", // Example for faster ping
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover", "focus", "grayscale"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    function ({ addUtilities, ...rest }) {
      console.log(rest);
      addUtilities({
        ".scrollbar-thin": {
          "::-webkit-scrollbar": {
            width: "1px",
            height: "1px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#f7ab0a",
            borderRadius: "1rem",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "#f7ab0a",
          },
        },
      });
    },
  ],
};
