import type { SystemStyleObjectRecord } from "@chakra-ui/react";

export const layer: SystemStyleObjectRecord = {
  layoutBlock: {
    marginX: "auto",
    width: "full",
    maxWidth: {
      base: "100vw",
      md: "85vw",
      lg: "800px",
    },
    paddingY: 4,
    paddingX: {
      base: 6,
      md: 2,
      lg: 0,
    },
  },
};
