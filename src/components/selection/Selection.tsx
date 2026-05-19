import { EventMap } from "./EventMap";
import { SelectionHeroContent } from "./SelectionHeroContent";
import { SelectionInfo } from "./SelectionInfo";
import { Timer } from "./Timer";

export const Selection = () => {
  return (
    <section id="selection" className="px-[8%] pt-[calc(5rem+5%)] pb-[8%] grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-[12px]">
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Открытый отбор кандидатов · 2027</p>
        </div>
        <div className="flex flex-col gap-5">
          <SelectionHeroContent />
          <hr className="mt-10 border" />
          <SelectionInfo />
          <Timer />
        </div>
      </div>
      <div className="flex justify-center xl:justify-end  items-center">
        <EventMap />
      </div>
    </section>
  );
};
