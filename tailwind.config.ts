import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        /** Uses horizontal space on typical screens; caps width so layout never looks “stretched.” */
        site: "min(92rem, calc(100vw - 2rem))",
      },
      colors: {
        "bg-primary": "#FEFCFB",
        "bg-secondary": "#FAF3EF",
        "border-light": "#F2E2DA",
        "border-mid": "#EDD4CC",
        accent: "#D4948A",
        "accent-dark": "#A06058",
        "accent-deeper": "#2A1A18",
        "text-primary": "#2A1A18",
        "text-secondary": "#9A8480",
        "text-muted": "#A4918D",
        "tag-bg": "#FAF3EF",
        "badge-green-bg": "#EDF5E8",
        "badge-green-text": "#3D6438",
        "badge-green-border": "#C4D4BE",
        "badge-blue-bg": "#EDE9F8",
        "badge-blue-text": "#5C519A",
        "badge-blue-border": "#CEC8EA",
        "badge-pink-bg": "#FDE8F2",
        "badge-pink-text": "#8A2252",
        "badge-pink-border": "#EAC0D4",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lato: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        pill: "8px",
        btn: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
