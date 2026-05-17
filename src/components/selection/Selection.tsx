import { EventMap } from "./EventMap";
import { SelectionInfo } from "./SelectionInfo";
import { Timer } from "./Timer";

export const Selection = () => {
  return (
    <div className="px-[8%] pt-[calc(5rem+5%)] pb-[8%] grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4 text-[12px]">
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Открытый отбор кандидатов · 2027</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[clamp(48px,7vw,90px)] leading-[0.9] font-black tracking-tight">
            Отбор
            <br />
            <span>
              <span className="text-primary">28</span>
              <span className="inline-block size-5 rounded-full bg-primary mx-2" />
              <span className="text-primary">10</span>
              <span className="inline-block size-5 rounded-full bg-gray-600 mx-2" />
              <span className="text-secondary">2027</span>
            </span>
            <br />
            <span className="bg-black text-white rounded-xl px-3.5 py-2 inline-block -rotate-1 text-[0.62em]">
              военные вузы РФ
            </span>
          </h1>
          <p className="text-xl text-black/80 font-light">
            Единый день отбора абитуриенток в военные училища страны. Подай
            заявку до <span className="font-bold">15.10.2027</span> — и приходи
            на испытания: физподготовка, психология, собеседование. Если ещё не
            определилась с направлением — пройди наш интерактивный
            тест-знакомство ниже.
          </p>
          <div>
            <a className="inline-block bg-primary px-5 py-3 text-white rounded-full border-2 border-black shadow-[3px_3px_0] shadow-black font-bold hover:-translate-x-px hover:-translate-y-px cursor-pointer transition-transform duration-300">
              Подать заявку на отбор
              <span className="ml-2">→</span>
            </a>
          </div>
          <hr className="mt-10 border" />
          <SelectionInfo />
          <Timer />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <EventMap />
      </div>
    </div>
  );
};
