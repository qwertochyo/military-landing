export const Footer = () => {
  return (
    <footer className="px-[8%] py-[3%] flex flex-col gap-10 bg-black text-white">
      <div className="flex justify-between">
        <div className="w-1/3 flex flex-col gap-4">
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
        <div className="text-sm">
          <h3 className="text-gray-400 mb-4 uppercase">Проект</h3>
          <ul>
            <li className="hover:text-secondary cursor-pointer">О тесте</li>
            <li className="hover:text-secondary cursor-pointer">Пройти тест</li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-gray-400 mb-4 uppercase">Поступление</h3>
          <ul>
            <li className="hover:text-secondary cursor-pointer">Требования</li>
            <li className="hover:text-secondary cursor-pointer">Список вузов</li>
            <li className="hover:text-secondary cursor-pointer">Документы</li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-gray-400 mb-4 uppercase">Контакты</h3>
          <ul>
            <li className="hover:text-secondary cursor-pointer">priem@svipe-kursatn.com</li>
            <li className="hover:text-secondary cursor-pointer">8 900 000 00 00</li>
            <li className="hover:text-secondary cursor-pointer">Москва · Знаменка, 19</li>
          </ul>
        </div>
      </div>

      <hr className="text-gray-400" />

      <div className="flex justify-between text-sm text-gray-400 uppercase">
        <span>© 2026 СВАЙП·КУРСАНТ · ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
        <div className="flex items-center gap-2">
          <span className="block">Сделано в РФ</span>
          <span className="block w-5 h-2 bg-background border border-white/50"></span>
          <span className="block w-5 h-2 bg-primary border border-white/50"></span>
          <span className="block w-5 h-2 bg-secondary border border-white/50"></span>
        </div>
      </div>

    </footer>
  );
}