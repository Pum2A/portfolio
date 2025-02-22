// components/ProjectGallery.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "E-commerce Platform", category: "Web" },
  { id: 2, title: "Mobile App", category: "Mobile" },
  { id: 3, title: "AI Dashboard", category: "Web" },
];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-sections">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div className="flex gap-4 mb-12 justify-center">
          {["all", "Web", "Mobile"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-accents text-background"
                  : "bg-background text-secondText"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter(
              (project) =>
                selectedCategory === "all" ||
                project.category === selectedCategory
            )
            .map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={`/project-${project.id}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h4 className="mt-4 text-xl font-bold">{project.title}</h4>
                <p className="text-secondText">{project.category}</p>
              </motion.div>
            ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-sections p-8 rounded-xl max-w-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Tutaj możesz dodać szczegóły projektu */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-2xl hover:text-accents"
                >
                  &times;
                </button>
                <h3 className="text-3xl mb-4">
                  {projects.find((p) => p.id === selectedProject)?.title}
                </h3>
                <p className="text-secondText">
                  Project details coming soon...
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGallery;
