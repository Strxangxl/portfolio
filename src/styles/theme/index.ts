import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";
import { layer } from "./layer";
import { styles } from "./styles";

const theme = extendTheme({
  colors,
  config,
  fonts,
  layer,
//   styles,
});

export default theme;
