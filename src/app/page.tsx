import About from "./about/page";
import { Hero } from "./components/Hero";
import PageTransition from "./components/PageTransition";
import { SkillsCloud } from "./components/SkillsCloud";
import Topbar from "./components/Topbar";
import Contact from "./contact/page";
import Journey from "./journey/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <Topbar />
      <PageTransition>
        <div className="flex flex-col">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <SkillsCloud />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="journey">
            <Journey />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </PageTransition>
    </>
  );
}
