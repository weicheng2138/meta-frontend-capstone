import { useState } from "react";
import { cn } from "./lib/utils";
import "./App.css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} />
      <main>
        <section className="bg-primary flex justify-center">
          <Hero />
        </section>
        <section className="flex justify-center">
          <Hero />
        </section>
      </main>
      <section className={cn("bg-primary flex justify-center")}>
        <Footer />
      </section>
    </>
  );
}

export default App;
