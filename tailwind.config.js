/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    {
      pattern: /text-(red|green|blue|yellow|purple|indigo|pink|gray|black|white|orange)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /bg-(red|green|blue|yellow|purple|indigo|pink|gray|black|white|orange)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

