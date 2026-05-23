import { motion } from "motion/react";
import { SwipeTest } from "./SwipeTest";

export const Interactive = () => {
  return (
    <section id="interactive" className="p-[8%] bg-black text-white">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <motion.div
            className="flex items-center gap-4 text-[12px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <p className="uppercase">Раздел 03</p>
          </motion.div>
          <div className="flex gap-5 flex-col items-start lg:flex-row lg:items-end">
            <motion.h2
              className="text-[clamp(40px,4.4vw,64px)] leading-[1.1] tracking-wide font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Cпециальное <span className="text-primary">В</span>оенное{" "}
              <span className="text-secondary">О</span>знакомление
            </motion.h2>
            <motion.h2
              className="hidden text-[clamp(54px,4.4vw,64px)] leading-[1.1] tracking-wide font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Не определился?{" "}
              <span className="text-secondary">Свайпни знакомство</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 font-light"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              
            >
              Перед подачей заявки на 28.10 – потрать три минуты на
              интерактивное знакомство с направлениями военной подготовки.
            </motion.p>
          </div>
        </div>
        <SwipeTest />
      </div>
    </section>
  );
};
