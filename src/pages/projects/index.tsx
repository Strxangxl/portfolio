import { Box, Grid, Heading } from "@chakra-ui/react";
import type { Project } from "contentlayer/generated";

import ProjectDetailWrapper from "../../components/ProjectDetailWrapper"

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

  return <div>Projects</div>;
};

export default Projects;
