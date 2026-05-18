interface Props {
  time: string;
  title: string;
  subtitle: string;
  stage: string;
}

export const EventMapItem = ({ time, title, subtitle, stage }: Props) => {
  return (
    <div className="flex items-center gap-3 justify-between px-2 py-4 border-b border-gray-300 last:border-0">
      <div className="flex gap-4">
        <div className="self-stretch border-r-2 border-dashed pr-3 flex items-center text-sm font-semibold">
          {time}
        </div>
        <div className="flex items-center gap-2 justify-start">
          <span className="inline-block size-4 border-2 rounded-full"></span>
          <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <span className="text-sm text-gray-600 font-light">{subtitle}</span>
          </div>
        </div>
      </div>

      <span className="whitespace-nowrap px-1.5 py-0.5 bg-primary text-white rounded-md font-bold text-[12px] uppercase">{stage}</span>
    </div>
  );
};
