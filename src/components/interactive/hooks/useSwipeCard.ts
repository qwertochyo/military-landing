import { useMotionValue, useTransform } from "motion/react";
import type { ICardItem } from "../../../types/types";

export const useSwipeCard = (
  isFront: boolean,
  index: number,
  card: ICardItem,
  onRemove: () => void,
  onLike?: (card: ICardItem) => void
) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0.8, 1, 0.8]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 3 : -3;

    return rotateRaw.get() + offset;
  });

  const handleDragEnd = () => {
    if (!isFront) return;

    const threshold = 150;

    if (Number(x.get()) > threshold) {
      onLike?.(card);
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
