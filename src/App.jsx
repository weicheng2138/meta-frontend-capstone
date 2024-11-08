import { useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} />
      <main>
        <Outlet />
      </main>
      <section className={cn("bg-primary flex justify-center")}>
        <Footer />
      </section>
    </>
  );
}

export default App;
