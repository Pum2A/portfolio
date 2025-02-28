// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider";
const projects = [
  {
    title: "E-commerce Platform",
    tech: ["Next.js", "Stripe", "Tailwind"],
    description: "Full-stack shopping platform with real-time analytics",
    image: "/project1.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "AI Dashboard",
    tech: ["React", "TensorFlow", "FastAPI"],
    description: "Machine learning visualization interface",
    image: "/project2.jpg",
    link: "#",
    github: "#"
  },
  // Add more projects...
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accents to-accents-dark bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-sections hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={i < 3} // Lazy load after first 3
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-text">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      whileHover={{ y: -2 }}
                      className="p-2 text-secondText hover:text-accents transition-colors"
                      aria-label="Live demo"
                    >
                      ↗
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ y: -2 }}
                      className="p-2 text-secondText hover:text-accents transition-colors"
                      aria-label="GitHub repository"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {/* GitHub icon */}
                      </svg>
                    </motion.a>
                  </div>
                </div>

                <p className="text-secondText min-h-[60px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -2 }}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === 'dark' 
                          ? 'bg-accents/10 text-accents'
                          : 'bg-accents-dark/10 text-accents-dark'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-accents/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;