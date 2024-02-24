/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // JavaScript ve TypeScript dosyaları
    "./public/index.html", // HTML dosyası
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
        sora: ["Sora", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
