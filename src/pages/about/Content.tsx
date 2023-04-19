import type { BoxProps } from "@chakra-ui/react";
import { useColorModeValue, Heading, Link, Text } from "@chakra-ui/react";

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Heading size="lg" marginTop={10}>Yo, how are you?</Heading>
      <Text {...{ ...textProps, textColor }}>
        Hi, I&apos;m Ratan, a junior frontend developer currently seeking
        full-time opportunities. I'm always learning and striving to improve.
        Let's connect!
      </Text>

      <Text {...{ ...textProps, textColor }}>
        Besides work, I enjoy reading and staying up-to-date with the latest in
        technology and design
      </Text>
    </>
  );
};

export default Content;
