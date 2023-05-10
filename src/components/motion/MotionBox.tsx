import type { HTMLChakraProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;

export type MotionBoxProps = Merge<
  HTMLChakraProps<"div">,
  HTMLMotionProps<"div">
>;

const MotionBox = motion(Box);

export default MotionBox;
