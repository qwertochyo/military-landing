import { FooterColumn } from "./FooterColumn";
import { FOOTER_LINKS } from "./config";

export const Footer = () => {
  return (
    <footer className="px-[8%] py-[3%] flex flex-col gap-10 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-2 border-black rounded-lg overflow-hidden">
              <span className="block w-full h-1/3 bg-background"></span>
              <span className="block w-full h-1/3 bg-primary"></span>
              <span className="block w-full h-1/3 bg-secondary"></span>
            </div>
            <span className="uppercase text-2xl font-black">Свайп·курсант</span>
          </div>
          <p className="text-sm text-gray-400">
            Профориентационный проект для абитуриентов вузов России. Реализован при поддержке Управления военного образования.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {FOOTER_LINKS.map((section) => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
          <div className="text-sm">
            <h3 className="text-gray-400 mb-4 uppercase">Контакты</h3>
            <ul>
              <li>priem@svipe-kursatn.com</li>
              <li>8 900 000 00 00</li>
              <li>Москва · Знаменка, 19</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="text-gray-400" />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-sm text-gray-400 uppercase">
        <span>© 2026 СВАЙП·КУРСАНТ · ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
        <div className="flex items-center gap-2 md:justify-self-end">
          <span className="block">Сделано в РФ</span>
          <span className="block w-5 h-2 bg-background border border-white/50"></span>
          <span className="block w-5 h-2 bg-primary border border-white/50"></span>
          <span className="block w-5 h-2 bg-secondary border border-white/50"></span>
        </div>
      </div>
    </footer>
  );
}