import { motion } from "framer-motion";
import About from "../About";
import Experience from "../Experience";
import Header from "../Header";
import Hero from "../Hero";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";

export default function Home() {
  return (
    <div className="items-center bg-[rgb(36,36,36)] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]
      text-white snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 ">
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
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
