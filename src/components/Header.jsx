import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { SITE_MENU } from "../constants";
function Header({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="flex items-center justify-center sticky w-full top-0">
      <nav className="p-4 flex gap-2 w-full justify-between items-center max-w-[640px]">
        <Link to="/" alt="Logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <button className="inline sm:hidden" onClick={handleClick}>
          {isOpen ? <X /> : <AlignJustify />}
        </button>
        <div className="hidden sm:flex sm:gap-2">
          {SITE_MENU.map((item) => {
            return (
              <Link key={item.link} to={item.link}>
                <span className="hover:bg-red-300">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Header;
