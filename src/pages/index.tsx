import { Box } from "@chakra-ui/react";
import Head from "next/head";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Test from "@/lib/Test";

const Home = () => {
  return (
    <>
      <Head>
        <title>strxangxl</title>
        <meta name="description" content="Portfolio site of strxangxl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.png" />
      </Head>
      <Box marginTop={-24}>
        <HeroSection />
        <ProjectsSection />
        <Test />
      </Box>
    </>
  );
};

export default Home;
