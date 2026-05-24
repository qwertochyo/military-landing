import { motion } from "motion/react";
import { useSwipeCard } from "./hooks/useSwipeCard";
import type { ICardItem } from "../../types/types";
import { useShakeCard } from "./hooks/useShakeCard";

interface Props {
  card: ICardItem;
  cards: ICardItem[];
  infoTrigger: number;
  onDislike: () => void;
  onLike: () => void;
}

export const SwipeCardItem = ({
  card,
  cards,
  infoTrigger,
  onDislike,
  onLike,
}: Props) => {

  const { id, name, age, direction, role, image, description, skills } = card;

  const index = cards.findIndex((c) => c.id === id);
  const isFront = id === cards[cards.length - 1].id;

  const { x, opacity, rotate, handleDragEnd } = useSwipeCard(
    isFront,
    index,
    onDislike,
    onLike
  );

  const { animate, transition } = useShakeCard({ isFront, infoTrigger });
    
  return (
    <motion.div
      className="flex flex-col gap-4 max-w-90 sm:max-w-100 w-full bg-white border-2 text-black p-5 rounded-3xl shadow-[6px_6px_0] shadow-secondary hover:cursor-grab active:cursor-grabbing origin-bottom"
      style={{
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={{ x: 0 }}
      animate={animate}
      transition={transition}
    >
      <div className="flex justify-between text-[12px] uppercase tracking-widest text-gray-600">
        <div>
          // {id} · {direction}
        </div>
        <div>ID · {id}</div>
      </div>
      <div className="relative h-100 rounded-2xl overflow-hidden w-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={direction}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-8 py-4 text-white">
          <div className="text-4xl font-semibold mb-2">
            <span>{name}, </span>
            <span>{age}</span>
          </div>

          <div className="text-[10px] opacity-90 uppercase">
            {direction} · {role}
          </div>
        </div>
      </div>
      <div className="font-light">{description}</div>
      <div className="flex gap-2">
        {skills.map((skill, idx) => (
          <div
            key={skill}
            className={`text-[12px] px-2 py-1 border rounded-2xl ${
              idx % 2 != 0
                ? "bg-secondary text-white"
                : "bg-transparent text-black"
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
