import { motion } from "motion/react";
import { EventMap } from "./EventMap";
import { SelectionHeroContent } from "./SelectionHeroContent";
import { SelectionInfo } from "./SelectionInfo";
import { Timer } from "./Timer";

export const Selection = () => {
  return (
    <section
      id="selection"
      className="px-[8%] pt-[calc(5rem+5%)] pb-[8%] grid grid-cols-1 xl:grid-cols-2 gap-10"
    >
      <div className="flex flex-col gap-4">
        <motion.div
          className="flex items-center gap-4 text-[12px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Открытый отбор кандидатов · 2027</p>
        </motion.div>
        <div className="flex flex-col gap-5">
          <SelectionHeroContent />
          <hr className="mt-10 border" />
          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-15 items-start">
            <SelectionInfo />
            <Timer />
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-center xl:justify-end  items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <EventMap />
      </motion.div>
    </section>
  );
};
