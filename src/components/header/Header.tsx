import { useState } from "react";
import { NavItem } from "./NavItem";
import { BurgerMenu } from "./BurgerMenu";
import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "Отбор", href: "#selection" },
  { label: "Поступающим", href: "#info-students" },
  { label: "Тест на роль", href: "#interactive" },
  { label: "Заявка", href: "#request" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed w-full top-0 left-0 bg-white z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`px-[8%] h-20 ${isOpen ? "border-0" : "border-b-2"}`}>
        <div className="flex justify-between items-center h-full">
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
          <a
            className="hidden xl:block bg-primary px-5 py-3 text-white text-sm rounded-full border-2 border-black 
          shadow-[3px_3px_0] shadow-black font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer transition-transform duration-300"
          >
            Подать заявку
            <span className="ml-2">→</span>
          </a>
          <BurgerMenu isOpen={isOpen} handleOpen={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <nav
        className={`
            xl:hidden px-[8%] w-full bg-white border-b-2 fixed overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"}
          `}
      >
        <ul className="flex flex-col gap-4 py-4">
          {NAV_LINKS.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
