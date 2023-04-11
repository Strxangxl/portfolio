import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <Stack as="section" marginBottom={16} spacing={4}>
      <Link href="/projects">
        <Heading as="h1" size="lg" cursor="pointer" marginBottom={2}>
          Projects
        </Heading>
      </Link>
    </Stack>
  );
};

export default ProjectsSection;
