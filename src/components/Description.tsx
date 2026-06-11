import type { BoxProps } from "@chakra-ui/react";
import { useColorModeValue, Heading, Link, Text } from "@chakra-ui/react";

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Heading size="lg" marginTop={10}>
        Hello, how are you?
      </Heading>
      <Text {...{ ...textProps, textColor }}>
        I'm Ratan, a Frontend Developer based in Pune, India. I specialize in
        engineering scalable web applications using React, Next.js, and
        TypeScript, with a sharp focus on performance optimization & clean
        component design.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        My experience ranges from building full-stack marketplaces with the MERN
        stack to contributing to major open-source UI infrastructure like
        Rocket.Chat. Feel free to reach out via email or LinkedIn below.
      </Text>
    </>
  );
};

export default Content;
