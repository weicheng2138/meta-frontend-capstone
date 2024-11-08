import { AlignJustify, X } from "lucide-react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { SITE_MENU } from "../constants";

function Header({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="flex items-center justify-center sticky w-full top-0 backdrop-blur-sm bg-white/60">
      <nav className="p-4 flex gap-2 w-full justify-between items-center max-w-[640px]">
        <Link to="/" alt="Logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <button
          className="inline sm:hidden hover:text-gray-400"
          onClick={handleClick}
        >
          {isOpen ? <X /> : <AlignJustify />}
        </button>
        <div className="hidden sm:flex sm:gap-4">
          {SITE_MENU.map((item) => {
            return (
              <Link key={item.link} to={item.link}>
                <span className="text-primary hover:text-lemon transition-colors text-sm">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Header;
