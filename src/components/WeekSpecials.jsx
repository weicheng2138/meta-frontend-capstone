import { cn } from "../lib/utils";
import { Bike } from "lucide-react";
import restauranfoodImage from "../assets/restauranfood.jpg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
const Card = ({ name, image, price, description }) => {
  return (
    <div className="flex flex-col justify-between gap-2 w-full h-full bg-hightlight-light rounded-xl">
      <div className="flex flex-col gap-2">
        <img
          src={image}
          alt="food"
          className="rounded-t-xl object-cover h-40 w-full"
        />
        <div className="flex flex-col p-2">
          <div className="flex justify-between gap-2 mb-4">
            <h3 className="font-medium">{name}</h3>
            <span className="text-price">{price}</span>
          </div>
          <p className="text-sm text-hightlight-dark">{description}</p>
        </div>
      </div>
      <button className="w-fit text-sm px-4 py-2 group font-medium hover:text-lemon">
        Order a delivery{" "}
        <Bike className="inline group-hover:translate-x-4 transform transition-transform duration-300" />
      </button>
    </div>
  );
};
const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: restauranfoodImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

function WeekSpecials() {
  return (
    <div
      className={cn(
        "w-full py-6 px-2 max-w-[640px] flex flex-col justify-center items-center gap-6 my-8",
      )}
    >
      <section className="flex justify-between w-full items-center">
        <h2 className="text-lg font-bold">Weeks Specials</h2>
        <button className="bg-lemon text-primary px-4 py-2 rounded w-fit hover:bg-lemon/75 transition-colors">
          Online Menu
        </button>
      </section>
      <section className={cn("flex flex-col gap-6", "sm:flex-row sm:gap-2")}>
        {meals.map((meal) => {
          return <Card key={meal.name} {...meal} />;
        })}
      </section>
    </div>
  );
}

export default WeekSpecials;
