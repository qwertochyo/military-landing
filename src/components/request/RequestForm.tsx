import { motion } from "motion/react";
import { useForm } from "./hooks/useForm";
import { useAnimationList } from "../../hooks/useAnimationList";

export const RequestForm = () => {
  const { formState, errorsState, handleChange, handleSubmit } = useForm();

  const { container, itemRToL } = useAnimationList();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex flex-col gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={itemRToL}>
            <label className="flex flex-col w-full gap-2">
              <div className="flex justify-between">
                <span className="uppercase text-[12px] font-light">Имя</span>
                {errorsState.name && (
                  <span className="font-bold text-red-500 text-sm normal-case">
                    {errorsState.name}
                  </span>
                )}
              </div>
              <input
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="border-2 rounded-2xl outline-0 focus:shadow-[3px_5px_0] focus:shadow-primary p-4 transition-shadow duration-300"
                type="text"
                placeholder="Дмитрий"
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <div className="flex justify-between">
                <span className="uppercase text-[12px] font-light">
                  Фамилия
                </span>
                {errorsState.lastname && (
                  <span className="font-bold text-red-500 text-sm normal-case">
                    {errorsState.lastname}
                  </span>
                )}
              </div>
              <input
                name="lastname"
                value={formState.lastname}
                onChange={handleChange}
                className="border-2 rounded-2xl outline-0 focus:shadow-[3px_5px_0] focus:shadow-primary p-4 transition-shadow duration-300"
                type="text"
                placeholder="Насос"
              />
            </label>
          </motion.div>
          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={itemRToL}>
            <label className="flex flex-col w-full gap-2">
              <div className="flex justify-between">
                <span className="uppercase text-[12px] font-light">
                  Телефон
                </span>
                {errorsState.phone && (
                  <span className="font-bold text-red-500 text-sm normal-case">
                    {errorsState.phone}
                  </span>
                )}
              </div>
              <input
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="border-2 rounded-2xl outline-0 focus:shadow-[3px_5px_0] focus:shadow-primary p-4 transition-shadow duration-300"
                type="tel"
                placeholder="+7 (___) ___–__–__"
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <div className="flex justify-between">
                <span className="uppercase text-[12px] font-light">Почта</span>
                {errorsState.email && (
                  <span className="font-bold text-red-500 text-sm normal-case">
                    {errorsState.email}
                  </span>
                )}
              </div>
              <input
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="border-2 rounded-2xl outline-0 focus:shadow-[3px_5px_0] focus:shadow-primary p-4 transition-shadow duration-300"
                type="email"
                placeholder="you@mail.ru"
              />
            </label>
          </motion.div>
          <motion.label
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: "-10%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="uppercase text-[12px] font-light">
              Сообщение (необязательно)
            </span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="border-2 rounded-2xl outline-0 focus:shadow-[3px_5px_0] focus:shadow-primary p-4 transition-shadow duration-300"
              cols={50}
              rows={5}
              placeholder="Расскажите о себе или задай вопрос приёмной комиссии"
            />
          </motion.label>
          <motion.label
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {errorsState.confirm && (
              <span className="font-bold text-red-500 text-sm normal-case">
                {errorsState.confirm}
              </span>
            )}
            <div className="flex items-start gap-3">
              <input
                name="confirm"
                checked={formState.confirm}
                onChange={handleChange}
                type="checkbox"
                className="shrink-0 appearance-none w-6 h-6 rounded-md border-2 border-black checked:bg-primary checked:border-primary transition cursor-pointer"
              />
              <p>
                Я согласен на обработку персональных данных в соответствии с
                Федеральным законом №152-ФЗ и Политикой конфиденциальности
                проекта.
              </p>
            </div>
          </motion.label>
        </motion.div>
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[12px] uppercase font-light tracking-widest">
            → Ответ в течение 1 рабочего дня
          </p>
          <button
            type="submit"
            className="bg-primary px-5 py-3 text-white rounded-full border-2 border-black shadow-[3px_3px_0] shadow-black font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300"
          >
            Записаться на отбор <span>→</span>
          </button>
        </motion.div>
      </div>
    </form>
  );
};
