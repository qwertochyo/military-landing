import { useMotionValue, useTransform } from "motion/react";

export const useSwipeCard = (
  isFront: boolean,
  index: number,
  onRemove: () => void,
  onLike: () => void
) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0.8, 1, 0.8]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 3 : -3;

    return rotateRaw.get() + offset;
  });

  const handleDragEnd = (_, info) => {
    if (!isFront) return;
    
    if (info.offset.x > 100) {
      onLike();
    }

    onRemove();
  };

  return {
    x,
    opacity,
    rotate,
    handleDragEnd,
  };
};
