import type { Project } from "contentlayer/generated";
import { Box, Stack, Grid, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";

type ProjectSectionProps = { projects: Project[] };

const ProjectsSection = ({ projects }: ProjectSectionProps) => {
  return (
    <Stack>
      <Link href="/projects">
        <Heading as="h1" size="lg" cursor="pointer" marginBottom={8}>
          Projects
        </Heading>
      </Link>

      <Grid
        gap={8}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginY={8}
      >
        {projects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </Grid>

      <Box>
        <Button
          as={Link}
          href="/projects"
          rightIcon={<FaArrowRight />}
          size="lg"
          variant="outline"
          fontFamily="heading"
          mt={5}
        >
          view all projects
        </Button>
      </Box>
    </Stack>
  );
};

export default ProjectsSection;
