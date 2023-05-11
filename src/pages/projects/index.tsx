import Head from "next/head";
import { GetStaticProps } from "next";

import MotionGrid from "@/components/motion/MotionGrid";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { Project } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";
import MotionBox from "@/components/motion/MotionBox";
import ProjectDetailWrapper from "@/components/ProjectDetailWrapper";

const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

type ProjectListProps = {
  projects: Project[]
  featuredProjects?: Array<Project>;
};

const Projects = ({ projects }: ProjectListProps) => {
  const highlightedProjects = projects.filter(
    (project) => project.highlight
  );

  const nonHighlightedFeaturedProjects = projects.filter(
    (project) => !project.highlight
  );

  const highlightedProjectCards = highlightedProjects.map((projectData) => {
    return (
      <MotionBox {...childAnimationProps} key={projectData.id}>
        <ProjectDetailWrapper
          projectData={projectData}
          source="Featured Projects"
          key={projectData.id}
        />
      </MotionBox>
    );
  });

  const nonHighlightedProjectCards = nonHighlightedFeaturedProjects.map(
    (projectData) => {
      return (
        <MotionBox {...childAnimationProps} key={projectData.id}>
          <ProjectDetailWrapper
            projectData={projectData}
            source="Featured Projects"
            key={projectData.id}
          />
        </MotionBox>
      );
    }
  );

  return (
    <>
      <Head>
        <title>strxangxl | projects</title>
      </Head>

      <Box marginBottom={8}>
        <Heading as="h2" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>

      <Grid gap={6} marginBottom={8}>
        <MotionGrid {...staggerAnimationProps}>
          {highlightedProjectCards}
        </MotionGrid>

        <MotionGrid
          {...staggerAnimationProps}
          gap={6}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          {nonHighlightedProjectCards}
        </MotionGrid>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await allProjects

  return {
    props: {
      projects
    },
  };
};

export default Projects;
