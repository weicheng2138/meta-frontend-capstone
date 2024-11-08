import { useEffect } from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
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
          "fixed inset-0 bg-white/30 backdrop-blur-sm overflow-hidden",
          !isOpen && "hidden",
        )}
      />
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-full max-w-72 bg-red-300 transition-transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "flex-col",
        )}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <h1>Drawer</h1>
      </div>
    </>
  );
}

export default Drawer;
