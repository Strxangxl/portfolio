import { GetStaticProps } from "next"
import { Box } from "@chakra-ui/react";
import Head from "next/head";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import type { Project } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated"
// import type { HomeProps } from "./types";

type HomeProps = {
  projects: Project[]
}

const Home = ({ projects }: HomeProps) => {
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
        <ProjectsSection projects={projects} />
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await allProjects.filter((project) => project.highlight && project)
  return {
    props: {
      projects
    }
  }
}

export default Home;