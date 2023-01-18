module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js, ts,tsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/{js,ts,jsx,tsx}",
  ],
  // darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  theme: { extend: {} },
  variants: {
    extend: {},
  },
};
