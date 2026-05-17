interface Props {
  isOpen: boolean,
  handleOpen: (value: boolean) => void
}

export const BurgerMenu = ({ isOpen, handleOpen }: Props) => {
  return (
    <div className="block xl:hidden">
      <button 
        onClick={() => handleOpen(!isOpen)}
        className="flex flex-col gap-1 border-2 p-2 rounded-lg cursor-pointer"
      >
        <span className={`block w-7 h-1 rounded-full bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-7 h-1 rounded-full bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-7 h-1 rounded-full bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
    </div>
  );
}