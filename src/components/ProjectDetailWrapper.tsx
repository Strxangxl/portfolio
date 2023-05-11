import { Link } from "@chakra-ui/react";
import type { Project } from "contentlayer/generated";
import ProjectDetailContent from "./Content";

type ProjectDetailWrapperProps = {
  projectData: Project;
  source: string;
};

const ProjectDetailWrapper = ({
  projectData,
  source,
}: ProjectDetailWrapperProps) => {
  const link = projectData.projectLink;
  if (link) {
    return (
      <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
        <ProjectDetailContent projectData={projectData} />
      </Link>
    );
  }

  return <ProjectDetailContent projectData={projectData} />;
};

export default ProjectDetailWrapper;
