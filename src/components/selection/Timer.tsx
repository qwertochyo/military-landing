export const Timer = () => {
  return (
    <div className="flex items-center gap-5 justify-end mt-15">
      <div className="px-5 py-2 text-center bg-black rounded-2xl">
        <span className="text-white text-3xl font-bold">528</span>
        <br />
        <span className="text-gray-400 text-sm font-light">дней</span>
      </div>
      <div className="px-5 py-2 text-center rounded-2xl border-2">
        <span className="text-3xl font-bold">23</span>
        <br />
        <span className="text-black/80 text-sm font-light">часов</span>
      </div>
      <div className="px-5 py-2 text-center rounded-2xl border-2">
        <span className="text-3xl font-bold">43</span>
        <br />
        <span className="text-black/80 text-sm font-light">мин</span>
      </div>
      <div className="px-5 py-2 text-center rounded-2xl border-2">
        <span className="text-3xl font-bold">55</span>
        <br />
        <span className="text-black/80 text-sm font-light">сек</span>
      </div>
    </div>
  );
};
