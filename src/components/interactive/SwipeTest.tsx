import { SwipeCardItem } from "./SwipeCardItem";
import { ResultCard } from "./ResultCard";
import { CARDS_DATA } from "../../data/data";
import { CircleX, Heart, Info } from "lucide-react";
import { useSwipeTest } from "./hooks/useSwipeTest";
import { useState } from "react";

export const SwipeTest = () => {
  const [infoTrigger, setInfoTrigger] = useState(0);

  const {
    cards,
    liked,
    randomIdx,
    total,
    current,
    like,
    dislike,
    reset,
    setCards,
    setLiked,
  } = useSwipeTest();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="flex flex-col gap-15">
        <div className="grid justify-center">
          {cards.length > 0 ? (
            cards.map((card) => (
              <SwipeCardItem
                key={card.id}
                card={card}
                cards={cards}
                infoTrigger={infoTrigger}
                setCards={setCards}
                onLike={(card) => {
                  setLiked((prev) => [...prev, card]);
                }}
              />
            ))
          ) : (
            <button
              className="flex items-center justify-center w-100 h-146.5 bg-white border-2 text-black p-5 rounded-3xl uppercase font-bold cursor-pointer animate-pulse"
              onClick={reset}
            >
              Нажмите, чтобы начать заново
            </button>
          )}
        </div>
        <div className="flex gap-5 justify-center items-center">
          <button
            className="size-20 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={dislike}
          >
            <CircleX
              className="w-full h-full text-secondary hover:text-white"
              strokeWidth={1}
            />
          </button>

          <button
            className="size-20 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={() => setInfoTrigger((v) => v + 1)}
          >
            <Info className="w-full h-full" strokeWidth={1} />
          </button>

          <button
            className="size-18 rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer"
            onClick={like}
          >
            <Heart className="w-full h-full text-primary fill-primary border-4 rounded-full p-3 hover:fill-white hover:text-white hover:border-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-2">
          {CARDS_DATA.map((_, index) => {
            const filled = index < current;
            return (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  filled ? "bg-white" : "bg-gray-600"
                }`}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="font-bold text-4xl">
            Карточка {current} из {total}
          </h6>
          <p className="text-gray-400">
            Подсказка: ориентируйся не на внешность, а на то, насколько тебе
            близки задачи, ритм жизни и характер героини.
          </p>
        </div>
        <hr />
        <div>
          {liked.length === 0 || cards.length > 0 ? (
            <p className="text-2xl font-black uppercase text-gray-400 text-center">
              Результат ознакомления будет тут
            </p>
          ) : (
            randomIdx !== null &&
            liked[randomIdx] && <ResultCard card={liked[randomIdx]} />
          )}
        </div>
      </div>
    </div>
  );
};
