const { config } = require("@config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "../packages/**/*.tsx", "../packages/**/*.ts"],
  presets: [config],
};
