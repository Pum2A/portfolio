// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    tech: ["Next.js", "Stripe", "Tailwind"],
    description: "Full-stack shopping platform with real-time analytics",
    image: "/project1.jpg",
  },
  {
    title: "AI Dashboard",
    tech: ["React", "TensorFlow", "FastAPI"],
    description: "Machine learning visualization interface",
    image: "/project2.jpg",
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accents to-accents/70 bg-clip-text text-transparent"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-sections hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-text">
                  {project.title}
                </h3>
                <p className="text-secondText mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-accents/10 text-accents rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
