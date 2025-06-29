import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // ❌ These will be filtered out
  { level: 60, category: "tools" },
  { name: "Broken Skill", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      (activeCategory === "all" || skill.category === activeCategory) &&
      skill.name &&
      typeof skill.level === "number"
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-md card-hover border border-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-full rounded-full origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
