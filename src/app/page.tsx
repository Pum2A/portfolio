// app/page.tsx
import About from "./about/page";
import { Hero } from "./components/Hero";
import PageTransition from "./components/PageTransition";
import { SkillsCloud } from "./components/SkillsCloud";
import { TimeLine } from "./components/Timeline";
import Contact from "./contact/page";
import Projects from "./projects/page";
export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <About />
        <SkillsCloud />
        <Projects />
        <TimeLine />
        <Contact /> {/* Add Contact as full-width section */}
      </div>
    </PageTransition>
  );
}
