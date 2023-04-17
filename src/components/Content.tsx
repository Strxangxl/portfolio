import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Project } from "contentlayer/generated";

type ProjectDetailWrapperProps = {
  projectData: Project;
  source: string;
};

type ProjectDetailContentProps = Pick<ProjectDetailWrapperProps, "projectData">;

const ProjectDetailContent = ({
  projectData: { title, description, stacks },
}: ProjectDetailContentProps) => {
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue("", "gray.700");

  return (
    <Box
      width="100%"
      height="100%"
      padding={8}
      borderRadius={24}
      borderWidth={2}
      borderColor="cardBorder"
      transition="0.2s ease-out"
      _hover={{
        shadow: "lg",
        borderColor: "cardHoverBorder",
        borderWidth: 2,
        backgroundColor,
      }}
    >
      <Flex alignItems="center" width="100%" height="100%" gridGap={8}>
        <Flex gridGap={6} wrap="wrap" flexBasis="85%" height="full">
          <Box alignSelf="flex-start" width="full">
            <Heading size="md" marginBottom={2}>
              <Text fontSize="md">{title}</Text>
            </Heading>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectDetailContent;
