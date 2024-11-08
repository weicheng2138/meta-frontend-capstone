import Hero from "../components/Hero";
import WeekSpecials from "../components/WeekSpecials";
function Home() {
  return (
    <>
      <section className="bg-primary flex justify-center">
        <Hero />
      </section>
      <section className="flex justify-center">
        <WeekSpecials />
      </section>
    </>
  );
}

export default Home;
