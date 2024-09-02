import { motion } from "framer-motion";
import About from "../About";
import Experience from "../Experience";
import Header from "../Header";
import Hero from "../Hero";
import Skills from "../Skills";

export default function Home() {
  return (
    <div className="items-center bg-[rgb(36,36,36)]  text-white snap-y h-screen snap-mandatory overflow-scroll  z-0 ">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className=" snap-center">
        <About />
      </section>
      <section id="exp" className=" snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
    </div>
  );
}
