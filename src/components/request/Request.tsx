import { AtSign, Building, Phone } from "lucide-react";
import { RequestForm } from "./RequestForm";

export const Request = () => {
  return (
    <div className="p-[8%] grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4 text-[12px]">
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Раздел 04</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-[clamp(54px,4.4vw,64px)] leading-none font-bold">
              Заявка на <br />{" "}
              <span className="text-secondary">28.10.2027</span>
            </h3>
            <p className="text-lg text-gray-600">
              Оставь контакты — приёмная комиссия свяжется в течение одного
              рабочего дня. Дедлайн приёма заявок —{" "}
              <span className="font-bold text-gray-800">15.10.2027</span>.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-5 items-center">
              <div className="border-2 p-2 rounded-xl">
                <Phone size={18} />
              </div>
              <p className="font-light tracking-widest">
                8 800 000 00 00 · с 9:00 до 19:00 МСК
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="border-2 p-2 rounded-xl">
                <AtSign size={18} />
              </div>
              <p className="font-light tracking-widest">
                priem@svipe-kursant.ru
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="border-2 p-2 rounded-xl">
                <Building size={18} />
              </div>
              <p className="font-light tracking-widest">
                Москва, ул. Знаменка, 19
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RequestForm />
      </div>
    </div>
  );
};
