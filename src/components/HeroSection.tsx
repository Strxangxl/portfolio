import { Box, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box height="90vh" alignItems="center" display="grid">
      <Box
        verticalAlign="center"
        marginTop={[8, 0]}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="xl" paddingBottom={11}>
          Yo! I&apos;m Ratan
        </Heading>
        <Text>
          Crafting code, one song at a time. Constantly learning, growing, and
          improving
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
