import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Technologies from "../components/Technologies/Technologies";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import Industries from "../components/Industries/Industries";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <FloatingButtons />
    </>
  );
}

export default Home;