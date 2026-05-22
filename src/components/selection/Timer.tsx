import { motion } from "motion/react";
import { useTimer } from "./hooks/useTimer";
import { useAnimationList } from "../../hooks/useAnimationList";

export const Timer = () => {
  const { timeLeft } = useTimer();
  const { container, itemLToR } = useAnimationList();

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center gap-5 sm:justify-end sm:self-end"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="px-5 py-2 text-center bg-black rounded-2xl"
        variants={itemLToR}
      >
        <span className="text-white text-3xl font-bold">{timeLeft.days}</span>
        <br />
        <span className="text-gray-400 text-sm font-light">дней</span>
      </motion.div>

      <motion.div
        className="px-5 py-2 text-center rounded-2xl border-2"
        variants={itemLToR}
      >
        <span className="text-3xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <br />
        <span className="text-black/80 text-sm font-light">часов</span>
      </motion.div>

      <motion.div
        className="px-5 py-2 text-center rounded-2xl border-2"
        variants={itemLToR}
      >
        <span className="text-3xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <br />
        <span className="text-black/80 text-sm font-light">мин</span>
      </motion.div>

      <motion.div
        className="px-5 py-2 text-center rounded-2xl border-2"
        variants={itemLToR}
      >
        <span className="text-3xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <br />
        <span className="text-black/80 text-sm font-light">сек</span>
      </motion.div>
    </motion.div>
  );
};
