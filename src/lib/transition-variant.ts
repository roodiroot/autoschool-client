import { Variants } from "framer-motion";

export const transitionObjectVariants = {
  // duration: 0.6,
  // type: "spring",
  // bounce: 0.4,

  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const appearanceObjectVariants: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: transitionObjectVariants,
  },
};
