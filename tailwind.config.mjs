/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#020617",
        "bg-elevated": "#020617",
        "accent": {
          DEFAULT: "#22d3ee",
          soft: "#0f172a"
        }
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)"
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(34, 211, 238, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;

