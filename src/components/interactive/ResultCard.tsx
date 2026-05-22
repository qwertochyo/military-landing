import type { ICardItem } from "../../types/types";

interface Props {
  card: ICardItem;
}

export const ResultCard = ({ card }: Props) => {
  const { direction, description } = card;

  return (
    <div className="flex flex-col gap-3 bg-white p-8 rounded-2xl text-black shadow-[10px_10px_0] shadow-secondary">
      <div className="text-sm uppercase font-light">
        Направление, которое тебе подошло
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-bold text-primary">
          {direction}
        </p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}