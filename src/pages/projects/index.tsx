import { Box, Grid, Heading } from "@chakra-ui/react";
import type { Project } from "contentlayer/generated";

import ProjectDetailWrapper from "../../components/ProjectDetailWrapper";

type ProjectListProps = {
  featuredProjects: Array<Project>;
};

const Projects = ({ featuredProjects }: ProjectListProps) => {
  const highlightedProjects = featuredProjects.filter(
    (project) => project.highlight
  );
  const nonHighlightedProjects = featuredProjects.filter(
    (project) => !project.highlight
  );

  const highlightedProjectsCards = highlightedProjects.map((projectData) => {
    return (
      <Box key={projectData.id}>
        <ProjectDetailWrapper
          projectData={projectData}
          source="Featured Projects"
          key={projectData.id}
        />
      </Box>
    );
  });

  const nonhighlightedProjectsCards = nonHighlightedProjects.map(
    (projectData) => {
      return (
        <Box key={projectData.id}>
          <ProjectDetailWrapper
            projectData={projectData}
            source="Featured Projects"
            key={projectData.id}
          />
        </Box>
      );
    }
  );

  return (
    <>
      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>
      <Grid gap={6} marginBottom={8}>
        {/* <Grid gap={6}>{highlightedProjectsCards}</Grid>
        <Grid
          gap={6}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          {nonhighlightedProjectsCards}
        </Grid> */}
      </Grid>
    </>
  );
};

export default Projects;
