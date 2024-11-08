import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className="overflow-hidden">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est,{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est,{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, vehicula, velit at ultricies
          luctus, magna purus tincidunt est, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam vehicula, velit at ultricies
          luctus, magna purus tincidunt est,{" "}
        </p>
      </main>
    </>
  );
}

export default App;
