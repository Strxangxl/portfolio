import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";
import { layerStyles } from "./layerStyles";
import { styles } from "./styles";
import { semanticTokens} from "./semanticTokens";
import { components } from "./components";

const theme = extendTheme({
  colors,
  config,
  fonts,
  layerStyles,
  semanticTokens,
  styles,
  components
});

export default theme;
