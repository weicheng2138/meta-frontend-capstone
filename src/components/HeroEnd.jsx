import { cn } from "../lib/utils";
import imgA from "../assets/Mario and Adrian A.jpg";
import imgB from "../assets/Mario and Adrian B.jpg";
function HeroEnd() {
  return (
    <div
      className={cn(
        "w-full py-6 px-2 max-w-[640px] flex flex-col justify-center items-center gap-6 my-8",
        "sm:flex-row sm:px-3",
      )}
    >
      <section className="flex flex-col basis-1/2">
        <h1 className="text-lemon text-3xl font-black">Little Lemon</h1>
        <h2 className="text-hightlight-dark text-lg font-bold mb-2">Chicago</h2>
        <p className="text-hightlight-dark mb-6">
          Lorem ipsum dolor sit amet at et stet zzril erat ea rebum et sed. At
          duis sit lorem aliquam clita erat et sed ipsum labore rebum laoreet
          delenit eum. Diam et sanctus.
        </p>
      </section>
      <section className={cn("w-full", "sm:basis-1/2")}>
        <div className={cn("relative h-96 w-full", "sm:h-60")}>
          <div className={cn("absolute h-52 w-2/3 bottom-0 left-0", "sm:w-44")}>
            <img
              src={imgA}
              alt="mario and adrian a"
              className={cn(
                "rounded object-cover object-right h-52 w-full",
                "sm:w-96",
              )}
            />
          </div>
          <div className={cn("absolute top-0 right-0 h-52 w-2/3", "sm:w-44")}>
            <img
              src={imgB}
              alt="mario and adrian b"
              className={cn(
                "rounded object-cover object-right h-52 w-full",
                "sm:w-96",
              )}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroEnd;
