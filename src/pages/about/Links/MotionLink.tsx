import { Icon, Link, Tooltip } from "@chakra-ui/react";
import * as React from "react";

import MotionBox from "@/components/motion/MotionBox";

import type { MotionLinkProps } from "../types";

const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

const MotionLink = (props: MotionLinkProps) => {
  const { name, url, icon } = props;

  return (
    <MotionBox {...childAnimationProps}>
      <Tooltip label={name}>
        <Link href={url} isExternal>
          <Icon as={icon} fontSize="2xl" />
        </Link>
      </Tooltip>
    </MotionBox>
  );
};

export default MotionLink;
