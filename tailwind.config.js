/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
  plugins: ["@@tailwindcss/filters"],
};
