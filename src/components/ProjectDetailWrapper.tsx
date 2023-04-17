import { Link } from "@chakra-ui/react";
import type { Project } from "contentlayer/generated";
import ProjectDetailContent from "./Content"

type ProjectDetailWrapperProps = {
  projectData: Project;
  source: string;
};

const ProjectDetailWrapper = ({
  projectData,
  source,
}: ProjectDetailWrapperProps) => {
  return <ProjectDetailContent projectData={projectData} />;
};

export default ProjectDetailWrapper;
