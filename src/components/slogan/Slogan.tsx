import { motion } from "motion/react";

export const Slogan = () => {
  return (
    <div className="relative p-[8%] bg-black text-white uppercase">
      <motion.div
        className="absolute top-0 left-0 h-3 w-full"
        style={{
          background: `
            repeating-linear-gradient(
              135deg,
              #fe0000 0 18px,
              #ffffff 18px 22px,
              #0000fe 22px 40px,
              #ffffff 40px 44px
            )
          `,
        }}
        animate={{
          backgroundPositionX: ["0px", "64px"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
      />
      <div className="flex flex-col gap-15 items-center">
        <motion.h2
          className="text-center text-[clamp(60px,7vw,120px)] leading-[1.1] font-bold"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Твой путь к{" "}
          <span className="bg-primary rounded-2xl px-2 py-1 inline-block -rotate-3">
            офицерскому
          </span>{" "}
          <span className="text-secondary">званию</span> начинается{" "}
          <span className="bg-secondary px-1 py-1 rounded-2xl inline-block rotate-3">
            здесь
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          День единого отбора ·{" "}
          <span className="font-bold text-white">28.10.2027</span>
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-3 w-full"
        style={{
          background: `
            repeating-linear-gradient(
              135deg,
              #fe0000 0 18px,
              #ffffff 18px 22px,
              #0000fe 22px 40px,
              #ffffff 40px 44px
            )
          `,
        }}
        animate={{
          backgroundPositionX: ["64px", "0px"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
      />
    </div>
  );
};
