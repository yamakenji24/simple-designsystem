const { config } = require("@config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.tsx"],
  presets: [config],
};
