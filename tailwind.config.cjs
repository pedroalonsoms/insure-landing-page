/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "hsl(216, 30%, 68%)",
          900: "hsl(256, 26%, 20%)",
        },
        my_neutral: {
          100: "hsl(0, 0%, 98%)",
          800: "hsl(273, 4%, 51%)",
          900: "hsl(270, 9%, 17%)",
        },
      },
      fontFamily: {
        dm_serif: ["DM Serif Display", "serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
