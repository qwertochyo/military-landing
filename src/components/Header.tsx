export const Header = () => {
  return (
    <header className="px-[8%] py-[1%] flex justify-between items-center border-b-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border-2 rounded-lg overflow-hidden">
          <span className="block w-full h-1/3 bg-background"></span>
          <span className="block w-full h-1/3 bg-primary"></span>
          <span className="block w-full h-1/3 bg-secondary"></span>
        </div>
        <span className="uppercase text-2xl font-black">Свайп·курсант</span>
      </div>
      <nav>
        <ul className="flex gap-10 ">
          <li>Отбор</li>
          <li>Поступающим</li>
          <li>Тест на роль</li>
          <li>Вопросы</li>
        </ul>
      </nav>
      <button className="bg-primary px-5 py-3 text-white text-sm rounded-full border-2 border-black 
      shadow-[3px_3px_0] shadow-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer">
        Подать заявку
        <span className="ml-2">→</span>
      </button>
    </header>
  );
}