import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  // Programming
  { name: "Python", level: 70, category: "programming", icon: "🐍" },
  { name: "Java", level: 85, category: "programming", icon: "☕" },
  { name: "C/C++", level: 80, category: "programming", icon: "⚡" },

  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 80, category: "frontend", icon: "🚀" },
  { name: "React", level: 70, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 75, category: "frontend", icon: "💨" },
  { name: "Next.js", level: 65, category: "frontend", icon: "▲" },

  // Backend
  { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
  { name: "Express", level: 70, category: "backend", icon: "🚄" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 75, category: "backend", icon: "🐘" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "🔧" },
  { name: "Figma", level: 85, category: "tools", icon: "🎯" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
];

const categories = [
  { id: "all", name: "All Skills", icon: "🌟" },
  { id: "programming", name: "Programming", icon: "💻" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "backend", name: "Backend", icon: "⚙️" },
  { id: "tools", name: "Tools", icon: "🔧" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-glow text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass-card hover:border-primary/50 text-foreground hover:bg-primary/5"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full origin-left"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};