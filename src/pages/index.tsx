import HeroSection from "@/components/HeroSection";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>strxangxl</title>
        <meta name="description" content="Portfolio site of strxangxl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box marginTop={-24}>
        <HeroSection />
      </Box>
    </>
  );
};

export default Home;
