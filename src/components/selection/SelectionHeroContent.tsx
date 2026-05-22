import { motion } from "motion/react";

export const SelectionHeroContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <motion.h1
        className="text-[clamp(80px,7vw,120px)] leading-[0.9] font-black tracking-tight"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Отбор
        <br />
        <span>
          <span className="text-primary">28</span>
          <span className="inline-block size-5 rounded-full bg-primary mx-2" />
          <span className="text-primary">10</span>
          <span className="inline-block size-5 rounded-full bg-gray-600 mx-2" />
          <span className="text-secondary">2027</span>
        </span>
        <br />
        <span className="bg-black text-white rounded-xl px-3.5 py-2 inline-block -rotate-1 text-[0.62em]">
          военные вузы РФ
        </span>
      </motion.h1>
      <motion.p 
        className="text-xl text-black/80 font-light"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Единый день отбора абитуриентов в военные училища страны. Подай заявку
        до <span className="font-bold">15.10.2027</span> — и приходи на
        испытания: физподготовка, психология, собеседование. Если ещё не
        определилась с направлением — пройди наш интерактивный тест-знакомство
        ниже.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a className="inline-block bg-primary px-5 py-3 text-white rounded-full border-2 border-black shadow-[3px_3px_0] shadow-black font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300">
          Подать заявку на отбор
          <span className="ml-2">→</span>
        </a>
      </motion.div>
    </div>
  );
};
