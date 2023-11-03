import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-gabarito)", "sans-serif"],
    },
    extend: {
      animation: {
        typing: "typing 0.8s steps(25) both, blink 0.8s infinite",
        width: "width 0.8s",
        disappear: "disappear 5s both",
      },
      keyframes: {
        width: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        typing: {
          "0%": {
            visibility: "hidden",
            width: "0%",
          },
          "100%": { visibility: "visible", width: "100%" },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "rgb(52, 211, 153)",
          },
        },
        disappear: {
          "0%": {
            opacity: "0",
            transform: "translateX(-2rem)",
            visibility: "hidden",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(0)",
            visibility: "visible",
          },
          "75%": {
            opacity: "1",
            transform: "translateX(0)",
            visibility: "visible",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-2rem)",
            visibility: "hidden",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
