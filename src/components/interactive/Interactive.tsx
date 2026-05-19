import { SwipeTest } from "./SwipeTest";

export const Interactive = () => {
  return (
    <section id="interactive" className="p-[8%] bg-black text-white">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4 text-[12px]">
            <span className="block w-6 h-0.5 bg-white"></span>
            <p className="uppercase">Раздел 03</p>
          </div>
          <div className="flex gap-5 flex-col items-start lg:flex-row lg:items-end">
            <h2 className="text-[clamp(54px,4.4vw,64px)] leading-[1.1] tracking-wide font-bold">
              Cпециальное <span className="text-primary">В</span>оенное{" "}
              <span className="text-secondary">О</span>знакомление
            </h2>
            <h2 className="hidden text-[clamp(54px,4.4vw,64px)] leading-[1.1] tracking-wide font-bold">
              Не определился?{" "}
              <span className="text-secondary">Свайпни знакомство</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Перед подачей заявки на 28.10 – потрать три минуты на
              интерактивное знакомство с направлениями военной подготовки.
            </p>
          </div>
        </div>
        <SwipeTest />
      </div>
    </section>
  );
};
