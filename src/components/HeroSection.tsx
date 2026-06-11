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
          Ratandeep Singh
        </Heading>
        <Text>
          Frontend Developer based in Pune, building scalable web applications
          with the React ecosystem.
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
