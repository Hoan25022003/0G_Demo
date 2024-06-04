/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xxl: "3rem",
    },
    extend: {
      colors: {
        primaryColor: "#CF32E5",
        hoverPrimaryColor: "#9E22A9",
        secondColor: "#FE7D82",
        grayColor: "#E2E2E2",
        borderColor: "#F2F2F2",
        blackColor: "#35250f",
        whiteColor: "#ffffff",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 80s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
