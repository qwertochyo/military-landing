const REQUIREMENTS = [
  {
    label: "Гражданство РФ, возраст 17–24 года",
    require: "обязательно",
  },
  {
    label: "Полное среднее образование",
    require: "аттестат",
  },
  {
    label: "Категория годности «А» по здоровью",
    require: "военкомат",
  },
  {
    label: "Сдача нормативов: бег 1 км, подтягивания, бег 100 метров",
    require: "очно",
  },
  {
    label: "Профессионально-психологический отбор",
    require: "2 этапа",
  },
];

export const InfoTable = () => {
  return (
    <div className="flex flex-col gap-10 bg-white p-6 sm:p-12 border-2 rounded-4xl shadow-[10px_10px_0] shadow-black">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl tracking-tight font-bold">
          Требования к кандидату
        </h3>
        <p className="text-sm text-gray-600">
          Применимо к программам бакалавриата большинства военных вузов России.
        </p>
      </div>
      <div className="flex flex-col border-t-2">
        {REQUIREMENTS.map((item, idx) => (
          <div
            key={item.label}
            className="flex gap-6 justify-between py-6 items-center border-b last:border-0"
          >
            <div className="flex gap-10 items-center">
              <div className="text-sm">{"0" + (idx + 1)}</div>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
            <div className="text-primary font-light uppercase text-[10px] tracking-widest whitespace-nowrap">
              {item.require}
            </div>
          </div>
        ))}
      </div>
      <div>
        <a
          className="inline-block bg-secondary px-7 py-3 text-white rounded-full border-2 border-black shadow-[3px_3px_0] shadow-black font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300"
          href="https://postupi.online/vuzi/voenkaf-da/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть список вузов
        </a>
      </div>
    </div>
  );
};
