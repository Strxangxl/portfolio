import type { DeepPartial, Theme } from "@chakra-ui/react";

export const styles: DeepPartial<Theme["styles"]> = {
  global: (props) => ({
    body: {
      overflowY: "scroll",
    },
    "::webkit-scrollbar": {
      width: "0.6rem",
      height: "0.7rem",
      backgroundColor: props.colorMode === "light" ? "gray.300" : "black",
    },
    "::webkit-scrollbar-thumb": {
      borderRadius: "full",
      backgroundColor: props.colorMode === "light" ? "gray.400" : "gray.700",
      "&:hover": {
        backgroundColor: props.colorMode === "light" ? "gray.500" : "gray.600",
      },
    },
    html: {
      scrollbarWidth: "thin",
      scrollbarColor: `${props.colorMode === "light" ? "#a0aec0" : "#2d3748"} ${
        props.colorMode === "light" ? "#cbd5e0" : "black"
      }`,
    },
  }),
};
