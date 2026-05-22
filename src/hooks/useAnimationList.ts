import type { Variants } from "motion";

export const useAnimationList = (
  startValue: number = 100,
  duration: number = 1
) => {
  const container: Variants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: duration,
        ease: "linear",
        delayChildren: 0.5,
      },
    },
  };

  const itemRToL: Variants = {
    hidden: { opacity: 0, x: `${startValue}%` },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const itemLToR: Variants = {
    hidden: { opacity: 0, x: `${-startValue}%` },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const itemTToB: Variants = {
    hidden: { opacity: 0, y: `${-startValue}%` },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemBToT: Variants = {
    hidden: { opacity: 0, y: `${-startValue}%` },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return { container, itemLToR, itemRToL, itemTToB, itemBToT };
};
