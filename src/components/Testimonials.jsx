import { cn } from "../lib/utils";
import { CircleUserRound, Star } from "lucide-react";

const customers = [
  {
    fullName: "Paul Atreides",
    rating: 5,
    says: `Lorem ipsum dolor  adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Duke Atreides",
    rating: 4,
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Chani",
    rating: 4,
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Stilgar",
    rating: 5,
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor.`,
  },
];

function RatingCard({ fullName, rating, says }) {
  return (
    <div className="flex flex-col gap-2 w-full h-full bg-hightlight-light rounded-xl px-2 py-6">
      <div className="flex gap-2">
        {Array.from({ length: rating }).map((_, index) => {
          return (
            <Star key={index} className="text-lemon fill-current" size={10} />
          );
        })}
      </div>
      <div className="flex gap-2 items-center">
        <CircleUserRound />
        <h3 className="font-medium text-sm">{fullName}</h3>
      </div>
      <p className="text-sm text-hightlight-dark">{says}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <div
      className={cn(
        "w-full py-6 px-2 max-w-[640px] flex flex-col justify-center items-center gap-6 my-8",
      )}
    >
      <section className="flex justify-center w-full items-center">
        <h2 className="text-lg font-bold text-white">Testimonials</h2>
      </section>
      <section
        className={cn("grid grid-cols-2 gap-4", "sm:grid-cols-4 sm:gap-2")}
      >
        {customers.map((customer) => {
          return <RatingCard key={customer.fullName} {...customer} />;
        })}
      </section>
    </div>
  );
}

export default Testimonials;
