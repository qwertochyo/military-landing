import { InfoTable } from "./InfoTable";
import classroomImg from "../../assets/classroom.jpg";
import lineupImg from "../../assets/line-up.jpg";

export const InfoStudents = () => {
  return (
    <section id="info-students" className="p-[8%] bg-foreground">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4 text-[12px]">
          <span className="block w-6 h-0.5 bg-black"></span>
          <p className="uppercase">Раздел 02</p>
        </div>
        <div className="flex gap-5 flex-col items-start lg:flex-row lg:items-end">
          <h2 className="text-[clamp(54px,4.4vw,64px)] leading-[0.8] font-bold">
            Информация для <span className="text-primary">поступающих</span>
          </h2> 
          <p className="text-xl text-gray-600 font-light">
            Базовые требования, сроки и документы — всё, что нужно знать для
            успешной подачи заявки и поступления
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 justify-between xl:grid-cols-[1.1fr_0.9fr]">
          <InfoTable />
          <div className="flex w-full min-h-70 xl:min-h-0 flex-col lg:flex-row h-full xl:flex-col gap-5">
            <div className="w-full h-[45%] lg:h-full xl:h-[45%] rounded-4xl relative border-2 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={lineupImg}
                alt="Парадный строй"
              />
              <div className="absolute top-5 right-7">
                <p className="font-semibold text-xl tracking-widest">
                  Парадный строй
                </p>
              </div>
            </div>
            <div className="w-full h-[40%] lg:f-ull xl:h-[40%] rounded-4xl relative border-2 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={classroomImg}
                alt="Учебная аудитория"
              />
              <div className="absolute top-5 left-7">
                <p className="font-semibold text-xl tracking-widest">
                  Учебная аудитория
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
