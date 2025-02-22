import About from "./about/page";
import Hero from "./components/Hero";
import PageTransition from "./components/PageTransition";
import SkillsCloud from "./components/SkillsCloud";
import Projects from "./projects/page";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <SkillsCloud />
      <Projects />
    </PageTransition>
  );
}
