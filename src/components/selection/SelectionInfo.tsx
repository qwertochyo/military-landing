import { motion } from "motion/react";
import { useAnimationList } from "../../hooks/useAnimationList";

export const SelectionInfo = () => {
  const { container, itemRToL } = useAnimationList();

  return (
    <motion.div
      className="flex flex-col gap-10 sm:flex-row text-black tracking-tight mt-2 "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center" variants={itemRToL}>
        <div className="font-bold text-5xl mb-1">
          <span>28</span>
          <span className="inline-block size-3 rounded-full bg-black ml-0.5" />
          <span>10</span>
        </div>
        <p className="text-black/70 text-sm">день отбора, 2027 год</p>
      </motion.div>
      <motion.div className="text-center" variants={itemRToL}>
        <div className="font-bold text-5xl mb-1">
          <span>15</span>
          <span className="inline-block size-3 rounded-full bg-black ml-0.5" />
          <span>10</span>
        </div>
        <p className="text-black/70 text-sm">дедлайн подачи заявки</p>
      </motion.div>
      <motion.div className="text-center" variants={itemRToL}>
        <div className="font-bold text-5xl mb-1">
          <span>12</span>
        </div>
        <p className="text-black/70 text-sm">военных вузов-участников</p>
      </motion.div>
    </motion.div>
  );
};
