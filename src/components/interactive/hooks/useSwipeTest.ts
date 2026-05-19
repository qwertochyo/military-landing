import { useEffect, useMemo, useState } from "react";
import { CARDS_DATA } from "../../../data/data";
import type { ICardItem } from "../../../types/types";

export const useSwipeTest = () => {
  const [cards, setCards] = useState<ICardItem[]>(CARDS_DATA);
  const [liked, setLiked] = useState<ICardItem[]>([]);
  const [randomIdx, setRandomIdx] = useState<number | null>(null);

  const total = CARDS_DATA.length;
  const current = total - cards.length;

  const topCard = useMemo(() => {
    return cards[cards.length - 1] || null;
  }, [cards]);

  useEffect(() => {
    if (liked.length > 0) {
      setRandomIdx(Math.floor(Math.random() * liked.length));
    }
  }, [liked]);

  const removeCard = (card: ICardItem) => {
    setCards((prev) => prev.filter((c) => c.id !== card.id));
  };

  const like = () => {
    if (!topCard) return;

    setLiked((prev) => [...prev, topCard]);
    removeCard(topCard);
  };

  const dislike = () => {
    if (!topCard) return;
    removeCard(topCard);
  };

  const reset = () => {
    setCards(CARDS_DATA);
    setLiked([]);
    setRandomIdx(null);
  };

  return {
    cards,
    liked,
    randomIdx,
    total,
    current,
    topCard,
    like,
    dislike,
    reset,
    setLiked,
    setCards,
  };
};
