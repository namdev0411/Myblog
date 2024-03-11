import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "132": "34rem",
        "140": "36rem",
        "148": "38rem",
        "156": "40rem",
        "164": "42rem",
        "172": "44rem",
      },
      minWidth: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "132": "34rem",
        "140": "36rem",
        "148": "38rem",
        "156": "40rem",
        "164": "42rem",
        "172": "44rem",
      },
    },
  },
  plugins: [],
};
export default config;
