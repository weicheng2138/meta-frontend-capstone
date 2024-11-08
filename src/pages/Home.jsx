import Hero from "../components/Hero";
import WeekSpecials from "../components/WeekSpecials";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
      <section className="bg-primary flex justify-center">
        <Hero />
      </section>
      <section className="flex justify-center">
        <WeekSpecials />
      </section>
      <section className="bg-primary flex justify-center">
        <Testimonials />
      </section>
    </>
  );
}

export default Home;
