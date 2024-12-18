import { cn } from "../lib/utils";
import imgChef from "../assets/restaurant chef B.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className={cn(
        "w-full py-6 px-2 max-w-[640px] flex flex-col justify-center items-center gap-6 my-8",
        "sm:flex-row sm:px-3",
      )}
    >
      <section className="flex flex-col basis-1/2">
        <h1 id="test-store-name" className="text-lemon text-3xl font-black">
          Little Lemon
        </h1>
        <h2 className="text-white text-lg font-bold mb-2">Chicago</h2>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet at et stet zzril erat ea rebum et sed. At
          duis sit lorem aliquam clita erat et sed ipsum labore rebum laoreet
          delenit eum. Diam et sanctus.
        </p>
        <Link to="/reservations">
          <button className="bg-lemon text-primary px-4 py-2 rounded-full w-fit hover:bg-lemon/75 transition-colors">
            Reserve a Table
          </button>
        </Link>
      </section>
      <section className={cn("basis-1/2")}>
        <img
          src={imgChef}
          alt="hero image of our chef"
          className="rounded object-cover"
        />
      </section>
    </div>
  );
}

export default Hero;
