export const SelectionInfo = () => {
  return (
    <div className="flex gap-10 text-black tracking-tight">
      <div className="text-center">
        <div className="font-bold text-5xl mb-1">
          <span>28</span>
          <span className="inline-block size-3 rounded-full bg-black ml-0.5" />
          <span>10</span>
        </div>
        <p className="text-black/70 text-sm">день отбора, 2027 год</p>
      </div>
      <div className="text-center">
        <div className="font-bold text-5xl mb-1">
          <span>15</span>
          <span className="inline-block size-3 rounded-full bg-black ml-0.5" />
          <span>10</span>
        </div>
        <p className="text-black/70 text-sm">дедлайн подачи заявки</p>
      </div>
      <div className="text-center">
        <div className="font-bold text-5xl mb-1">
          <span>12</span>
        </div>
        <p className="text-black/70 text-sm">военных вузов-участников</p>
      </div>
    </div>
  );
};
