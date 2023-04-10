import Link from "next/link";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Navigation from "./Navigation";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      zIndex={5}
      width="full"
      backgroundColor="headerAlphaBackground"
      layerStyle="blur-bg"
    >
      <Flex layerStyle="layoutBlock" alignItems="center">
        <Link href="/">
          <Heading size="md" fontWeight="bold" fontSize={["md", "xl"]}>
            strxangxl
          </Heading>
        </Link>

        <Spacer />
        <Flex alignItems="center" gap={4}>
          <Flex display={["none", "flex"]}>
            <Navigation />
          </Flex>

          <Flex gap={2}>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
