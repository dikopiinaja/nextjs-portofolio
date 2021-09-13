module.exports = {
  purge: ["./pages/**/*.{tsx}", "./components/**/*.{tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kausan: ["Kaushan Script"],
      roboto: ["Roboto Slab"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 0px #14161c",
    },
    extend: {
      colors: {
        brown: {
          DEFAULT: "#78350F",
        },
        dark: {
          DEFAULT: "#111827",
          100: "#1F2937",
          200: "#374151",
          300: "#4B5563",
          400: "#6B7280",
          500: "#9CA3AF",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
