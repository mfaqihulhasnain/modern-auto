import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCars />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
