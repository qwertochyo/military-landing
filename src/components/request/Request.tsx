import { AtSign, Building, Phone } from "lucide-react";
import { motion } from "motion/react";
import { RequestForm } from "./RequestForm";
import { useAnimationList } from "../../hooks/useAnimationList";

export const Request = () => {
  const { container, itemBToT } = useAnimationList();

  return (
    <section
      id="request"
      className="p-[8%] grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10"
    >
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex items-center gap-4 text-[12px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Раздел 04</p>
        </motion.div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <motion.h3
              className="text-[clamp(54px,4.4vw,64px)] leading-none font-bold"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Заявка на <br />{" "}
              <span className="text-secondary">28.10.2027</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Оставь контакты — приёмная комиссия свяжется в течение одного
              рабочего дня. Дедлайн приёма заявок —{" "}
              <span className="font-bold text-gray-800">15.10.2027</span>.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-7"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex gap-5 items-center" variants={itemBToT}>
              <div className="border-2 p-2 rounded-xl">
                <Phone size={18} />
              </div>
              <p className="font-light tracking-widest">
                8 800 000 00 00 · с 9:00 до 19:00 МСК
              </p>
            </motion.div>
            <motion.div className="flex gap-5 items-center" variants={itemBToT}>
              <div className="border-2 p-2 rounded-xl">
                <AtSign size={18} />
              </div>
              <p className="font-light tracking-widest">
                priem@svipe-kursant.ru
              </p>
            </motion.div>
            <motion.div className="flex gap-5 items-center" variants={itemBToT}>
              <div className="border-2 p-2 rounded-xl">
                <Building size={18} />
              </div>
              <p className="font-light tracking-widest">
                Москва, ул. Знаменка, 19
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <RequestForm />
      </div>
    </section>
  );
};
