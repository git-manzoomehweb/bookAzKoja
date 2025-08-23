/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./mobile/static/**/*.html",
    "./mobile/dynamic/**/*.html",
    "./web/static/**/*.html",
    "./web/dynamic/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          1: {
            500: "var(--secondary-1-500)",
            600: "var(--secondary-1-600)",
            700: "var(--secondary-1-700)",
            800: "var(--secondary-1-800)",
            900: "var(--secondary-1-900)",
          },
          2: {
            500: "var(--secondary-2-500)",
            600: "var(--secondary-2-600)",
            700: "var(--secondary-2-700)",
            800: "var(--secondary-2-800)",
            900: "var(--secondary-2-900)",
          },
        },
        zinc: {
          50: "var(--zinc-50)",
          100: "var(--zinc-100)",
          200: "var(--zinc-200)",
          300: "var(--zinc-300)",
          400: "var(--zinc-400)",
          500: "var(--zinc-500)",
          600: "var(--zinc-600)",
          700: "var(--zinc-700)",
          800: "var(--zinc-800)",
          900: "var(--zinc-900)",
          950: "var(--zinc-950)",
        },
        red: {
          50: "var(--red-50)",
          60: "var(--red-60)",
        },
        black: {
          1: "var(--black-1)",
          2: "var(--black-2)",
        },
      },
    },
  },

  plugins: [],
};
