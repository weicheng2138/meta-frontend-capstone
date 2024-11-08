import Hero from "../components/Hero";
import HeroEnd from "../components/HeroEnd";
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
      <section className="flex justify-center">
        <HeroEnd />
      </section>
    </>
  );
}

export default Home;
