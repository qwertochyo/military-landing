import { useState } from "react"
import { NavItem } from "./NavItem";
import { BurgerMenu } from "./BurgerMenu";
import { NAV_LINKS } from "./config";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-[8%] py-[1%] border-b-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 border-2 rounded-lg overflow-hidden">
            <span className="block w-full h-1/3 bg-background"></span>
            <span className="block w-full h-1/3 bg-primary"></span>
            <span className="block w-full h-1/3 bg-secondary"></span>
          </div>
          <span className="uppercase text-2xl font-black">Свайп·курсант</span>
        </div>
        <nav className="hidden xl:block">
          <ul className="flex gap-8">
            {NAV_LINKS.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </ul>
        </nav>
        <a className="hidden xl:block bg-primary px-5 py-3 text-white text-sm rounded-full border-2 border-black 
        shadow-[3px_3px_0] shadow-black font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer transition-transform duration-300">
          Подать заявку
          <span className="ml-2">→</span>
        </a>
        <BurgerMenu isOpen={isOpen} handleOpen={() => setIsOpen(!isOpen)} />
      </div>
      <nav
        className={`
          xl:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen
            ? "max-h-96 opacity-100 py-2"
            : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-4 py-4">
          {NAV_LINKS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}