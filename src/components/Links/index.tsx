import Head from "next/head";

import MotionBox from "@/components/motion/MotionBox";
import MotionFlex from "@/components/motion/MotionFlex";

import socialLinks from "../../types/constants";
import MotionLink from "../motion/MotionLink";

const wrapperAnimationProps = {
  variants: {
    before: { y: 0, opacity: 0, transition: { type: "spring" } },
    after: { y: 20, opacity: 1, transition: { type: "spring" } },
  },
  initial: "before",
  animate: "after",
};

const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

const Links = () => {
  return (
    <>
      <Head>
        <title>strxangxl | about</title>
      </Head>

      <MotionBox marginY={4} {...wrapperAnimationProps}>
        <MotionFlex
          flexWrap="wrap"
          gridGap={4}
          marginTop={4}
          {...staggerAnimationProps}
        >
          {socialLinks.map((link) => (
            <MotionLink {...link} key={link.url} />
          ))}
        </MotionFlex>
      </MotionBox>
    </>
  );
};

export default Links;
