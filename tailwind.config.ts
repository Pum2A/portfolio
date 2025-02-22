import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        sections: "#2C2C2C",
        accents: "#E94560",
        text: "#FFFFFF",
        secondText: "#D1D5DB",
        links: "#19C37D",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
