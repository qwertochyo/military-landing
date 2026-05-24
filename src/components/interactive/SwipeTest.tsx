import { motion } from "motion/react";
import { SwipeCardItem } from "./SwipeCardItem";
import { ResultCard } from "./ResultCard";
import { CARDS_DATA } from "../../data/data";
import { CircleX, Heart, Info } from "lucide-react";
import { useSwipeTest } from "./hooks/useSwipeTest";
import { useState } from "react";
import { useAnimationList } from "../../hooks/useAnimationList";

export const SwipeTest = () => {
  const [infoTrigger, setInfoTrigger] = useState(0);

  const {
    resetKey,
    cards,
    liked,
    randomIdx,
    total,
    current,
    like,
    dislike,
    reset
  } = useSwipeTest();

  const { container, itemLToR, itemRToL, itemBToT } = useAnimationList();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="flex flex-col gap-15">
        <motion.div
          key={resetKey}
          className="grid justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {cards.length > 0 ? (
            cards.map((card, idx) => (
              <motion.div
                key={card.id}
                style={{
                  gridRow: 1,
                  gridColumn: 1,
                  zIndex: idx,
                }}
                variants={itemLToR}
              >
                <SwipeCardItem
                  card={card}
                  cards={cards}
                  infoTrigger={infoTrigger}
                  onDislike={dislike}
                  onLike={like}
                />
              </motion.div>
            ))
          ) : (
            <button
              className="flex items-center justify-center w-100 h-146.5 bg-white border-2 text-black p-5 rounded-3xl uppercase font-bold cursor-pointer animate-pulse"
              onClick={reset}
            >
              Нажмите, чтобы начать заново
            </button>
          )}
        </motion.div>
        <motion.div
          className="flex gap-5 justify-center items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.button
            className="size-20 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={dislike}
            variants={itemRToL}
          >
            <CircleX
              className="w-full h-full text-secondary hover:text-white"
              strokeWidth={1}
            />
          </motion.button>

          <motion.button
            className="size-20 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={() => setInfoTrigger((v) => (v % 6 ? 0 : v + 1))}
            variants={itemBToT}
          >
            <Info className="w-full h-full" strokeWidth={1} />
          </motion.button>

          <motion.button
            className="size-18 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={like}
            variants={itemRToL}
          >
            <Heart className="w-full h-full text-primary fill-primary border-4 rounded-full p-3 hover:fill-white hover:text-white hover:border-white" />
          </motion.button>
        </motion.div>
      </div>
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex gap-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {CARDS_DATA.map((_, index) => {
            const filled = index < current;
            return (
              <motion.div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  filled ? "bg-white" : "bg-gray-600"
                }`}
                variants={itemRToL}
              />
            );
          })}
        </motion.div>
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h6 className="font-bold text-4xl">
            Карточка {current} из {total}
          </h6>
          <p className="text-gray-400">
            Подсказка: ориентируйся не на внешность, а на то, насколько тебе
            близки задачи, ритм жизни и характер героини.
          </p>
        </motion.div>
        <hr />
        <div>
          {liked.length === 0 || cards.length > 0 ? (
            <motion.p
              className="text-2xl font-black uppercase text-gray-400 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Результат ознакомления будет тут
            </motion.p>
          ) : (
            randomIdx !== null &&
            liked[randomIdx] && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ResultCard card={liked[randomIdx]} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
