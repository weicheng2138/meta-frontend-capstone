import { useEffect } from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
import { SITE_MENU } from "../constants";
import { Link } from "react-router-dom";

function Drawer({ isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 bg-white/30 backdrop-blur-sm overflow-hidden z-50",
          !isOpen && "hidden",
        )}
      />
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-full max-w-72 bg-white transition-transform drop-shadow-md z-50",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "flex-col",
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            <X />
          </button>
        </div>
        {SITE_MENU.map((item) => {
          return (
            <Link
              key={item.link}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="block p-2 mx-4 text-primary hover:text-lemon transition-colors"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Drawer;
