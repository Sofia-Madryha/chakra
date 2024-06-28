import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./ButtonStyles";

export const theme = extendTheme({
  fonts: {
    heading: "var(--primary-font)",
    body: "var(--primary-font)",
  },

  colors: {
    dark: {
      10: "#161616",
      20: "#fcf2f2",
      30: "#cccccc",
      40: "#a5a5a5",
      50: "#3d3d3",
      60: "#2d2d2d",
      70: "#1d1d1d",
      80: "#1a1a1a",
    },
    red: {
      20: "#d14a44",
    },
    white: "#fff",
  },

  styles: {
    global: {
      "html, body": {
        color: "white",
        backgroundColor: "dark.80",
      },
    },
  },

  components: {
    Button,
  },
});
