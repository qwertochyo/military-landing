import { motion } from "motion/react";
import { InfoTable } from "./InfoTable";
import classroomImg from "../../assets/classroom.jpg";
import lineupImg from "../../assets/line-up.jpg";
import { useAnimationList } from "../../hooks/useAnimationList";

export const InfoStudents = () => {
  const { container, itemBToT } = useAnimationList();

  return (
    <section id="info-students" className="p-[8%] bg-foreground">
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex items-center gap-4 text-[12px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Раздел 02</p>
        </motion.div>
        <motion.div
          className="flex gap-5 flex-col items-start lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-[clamp(54px,4.4vw,64px)] leading-[0.8] font-bold">
            Информация для <span className="text-primary">поступающих</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Базовые требования, сроки и документы — всё, что нужно знать для
            успешной подачи заявки и поступления
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-10 justify-between xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InfoTable />
          </motion.div>
          <motion.div
            className="flex w-full min-h-70 xl:min-h-0 flex-col lg:flex-row h-full xl:flex-col gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full h-[45%] lg:h-full xl:h-[45%] rounded-4xl relative border-2 overflow-hidden"
              variants={itemBToT}
            >
              <img
                className="object-cover w-full h-full"
                src={lineupImg}
                alt="Парадный строй"
              />
              <div className="absolute top-5 right-7">
                <p className="font-semibold text-xl tracking-widest">
                  Парадный строй
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-[40%] lg:h-full xl:h-[40%] rounded-4xl relative border-2 overflow-hidden"
              variants={itemBToT}
            >
              <img
                className="object-cover w-full h-full"
                src={classroomImg}
                alt="Учебная аудитория"
              />
              <div className="absolute top-5 left-7">
                <p className="font-semibold text-xl tracking-widest">
                  Учебная аудитория
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
