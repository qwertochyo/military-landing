import { motion } from "motion/react";

const MARQUEE_ITEMS = [
  { label: "дедлайн заявок · 15.10.2027" },
  { label: "9 регионов" },
  { label: "выездная коммисия" },
  { label: "12 вузов-участников" },
];

export const Marquee = () => {
  return (
    <div className="overflow-x-hidden bg-black py-4">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-70%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex gap-10 whitespace-nowrap text-2xl font-semibold text-white "
          >
            {MARQUEE_ITEMS.map((item, i) => (
              <div key={item.label} className="flex gap-10 items-center">
                <span
                  className={`block size-4 rounded-full ${
                    i % 2 === 0 ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <span key={item.label}>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
