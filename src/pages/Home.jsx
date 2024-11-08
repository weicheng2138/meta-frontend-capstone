import Hero from "../components/Hero";
function Home() {
  return (
    <>
      <section className="bg-primary flex justify-center">
        <Hero />
      </section>
      <section className="flex justify-center">
        <Hero />
      </section>
    </>
  );
}

export default Home;
