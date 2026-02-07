/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        income: "#27AE60",
        expense: "#EB5757",
        tax: "#2F80ED",
        primary: "#2F80ED",
        secondary: "#27AE60",
        danger: "#EB5757",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          tertiary: "#9CA3AF",
        },
      },
      borderRadius: {
        "glass": "24px",
        "card": "16px",
        "button": "12px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};

