import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "84em", //1344px
      lg: "75em", // 1200px
      md: "59em", // 944px
      sm: "44em", // 704px
      xs: "34em", // 544px
    },
    extend: {
      colors: {
        bg: "var(--color-background)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        tint: "var(--color-tint)",
        shade: "var(--color-shade)",
        grey: "var(--color-grey)",
        "light-grey": "var(--color-light-grey)",

        secondary: {
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
        },
        accent: {
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
        },
        gray: {
          30: "var(--color-gray-30)",
          40: "var(--color-gray-40)",
          50: "var(--color-gray-50)",
          60: "var(--color-gray-60)",
          70: "var(--color-gray-70)",
          90: "var(--color-gray-90)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
        },
      },
      boxShadow: {
        sm: "var(--box-shadow-sm)",
        md: "var(--box-shadow-md)",
        lg: "var(--box-shadow-lg)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
        "2xl": "var(--border-radius-2xl)",
        "3xl": "var(--border-radius-3xl)",
        full: "var(--border-radius-full)",
      },
    },
  },
  plugins: [],
};
export default config;
