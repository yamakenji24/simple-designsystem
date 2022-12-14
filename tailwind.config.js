const { config } = require("@config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.tsx", "./packages/**/*.ts"],
  presets: [config],
};
