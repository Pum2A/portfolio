// components/SkillsCloud.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "TypeScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "GraphQL", level: 80 },
  { name: "AWS", level: 75 },
  { name: "Docker", level: 70 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-secondText">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-background rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-accents to-accents/70 rounded-full"
        />
      </div>
    </div>
  );
};

const SkillsCloud = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Technical Mastery
        </h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;
