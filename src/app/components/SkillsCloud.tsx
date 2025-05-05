// components/SkillsCloud.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "./ThemeProvider";

const skills = [
  { name: "TypeScript", level: 95 },
  { name: "NextJS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TailwindCSS", level: 80 },
  { name: "SCSS", level: 75 },
  { name: "SQL", level: 70 },
];

export const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { theme } = useTheme();

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 text-secondText">
        <span className="font-medium">{name}</span>
        <span className="text-accents">{level}%</span>
      </div>
      <div className="h-2 bg-background rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`h-full rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-accents to-accents/70"
              : "bg-gradient-to-r from-accents to-accents-dark"
          }`}
        />
      </div>
    </div>
  );
};

export const SkillsCloud = () => {
  return (
    <section className="py-20 bg-sections">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-text to-secondText bg-clip-text text-transparent"
        >
          My Tech Stack & Skills
        </motion.h3>
        <div className="space-y-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
