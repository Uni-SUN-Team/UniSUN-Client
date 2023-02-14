/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "unisun-purple": "#312A5D",
        "unisun-orange": "#e39e1e",
      },
      backgroundImage: {
        "signin-background": "url('/asserts/background/signin_background.webp')",
        "register-background": "url('/asserts/background/register_background.webp')",
        "Group-40-u-purple": "url('/asserts/Logo/Group-40-u-purple.webp')",
        "Group-40": "url('/asserts/Logo/Group-40.webp')",
        "LogoUnisun-removebg-preview": "url('/asserts/Logo/LogoUnisun-removebg-preview.webp')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
