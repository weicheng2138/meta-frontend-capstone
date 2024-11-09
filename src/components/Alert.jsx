import { useAlertContext } from "../context/alertContext";
import { useRef, useEffect } from "react";
import { cn } from "../lib/utils";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed z-50 h-fit w-60 top-0 left-1/2 -translate-x-1/2 rounded",
        "flex px-4 py-2 text-white",
        "transition-all",
        type === "success" ? "bg-green-500" : "bg-red-500",
        isOpen ? "flex translate-y-8 opacity-100" : "opacity-0",
      )}
    >
      {message}
    </div>
  );
}

export default Alert;
