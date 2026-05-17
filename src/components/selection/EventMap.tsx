import { EventMapItem } from "./EventMapItem";

const EVENT_LIST = [
  {
    time: "09:00",
    title: "Регистрация и медосмотр",
    subtitle: "Документы, справка 086/у",
    stage: "30 мин",
  },
  {
    time: "09:00",
    title: "Регистрация и медосмотр",
    subtitle: "Документы, справка 086/у",
    stage: "30 мин",
  },
  {
    time: "09:00",
    title: "Регистрация и медосмотр",
    subtitle: "Документы, справка 086/у",
    stage: "30 мин",
  },
  {
    time: "09:00",
    title: "Регистрация и медосмотр",
    subtitle: "Документы, справка 086/у",
    stage: "30 мин",
  },
];

export const EventMap = () => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-[10px_10px_0] shadow-black">
      <div className="bg-black flex justify-between uppercase px-6 py-3 text-white text-sm tracking-widest">
        <div className="flex gap-3 items-center text-[12px]">
          <div className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-secondary opacity-100 [animation-duration:1s]"></span>
          </div>
          <p>Программа дня · 28.10.2027</p>
        </div>
        <p>№ СВК-2027</p>
      </div>
      <div className="flex justify-between px-6 py-5 border-b-2">
        <div>
          <h3 className="text-3xl font-bold leading-none">
            Как пройдёт
            <br />
            день отбора
          </h3>
          <span className="text-[12px] uppercase tracking-widest">
            5 этапов · с 09:00 до 17:30
          </span>
        </div>
        <span className="text-sm text-secondary font-bold border-2 rounded-lg p-1.5 self-start -rotate-3">
          ✓ приём открыт
        </span>
      </div>
      <div className="flex flex-col px-6 py-3">
        {EVENT_LIST.map((event) => (
          <EventMapItem
            key={event.title}
            time={event.time}
            title={event.title}
            subtitle={event.subtitle}
            stage={event.stage}
          />
        ))}
      </div>
      <div className="border-t-2 text-[12px] tracking-widest text-gray-600 uppercase flex justify-between px-6 py-3">
        <span>Место: 12 вузов · 9 регионов</span>
        <span>09:00 МСК</span>
      </div>
    </div>
  );
};
