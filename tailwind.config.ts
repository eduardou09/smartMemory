import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#c53249",
        textColorSecondary: "white",
        secondaryColor: "#fff200",
        lightGreen: '#5fd8b5',
        darkGreen: '#A0B341',
        backgroundColorFix:"#32c595",
        roxo: "#6718a3"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Define fontFamily fora do objeto de theme
  fontFamily: {
    'league-spartan': ['League Spartan', 'sans-serif'],
  },
  plugins: [],
};

export default config;

