import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "2rem",
    _hover: {
      borderColor: "gray",
      borderWidth: 2,
      shadow: "sma",
    },
  },
  variants: {
    outline: {
      borderWidth: 2,
    },
  },
};
