import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./ButtonStyles";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";
import { GlobalStyles } from "./GlobalStyles";

export const theme = extendTheme({
  fonts: Fonts,

  colors: Colors,

  styles: GlobalStyles,

  components: {
    Button,
  },
});
