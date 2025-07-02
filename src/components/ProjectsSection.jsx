import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Neural Shortener",
    description: "A full-stack URL shortener with real-time click tracking, responsive design, and role-based authentication.",
    image: "/projects/banner.png",
    tags: ["React", "TailwindCSS", "Supabase", "PostgreSQL", "JWT", "Vite"],
    demoUrl: "https://neural-shortener.netlify.app/",
    githubUrl: "https://github.com/P-ShashiKanthReddy/Neural-URL-Shortener",
    featured: true,
  },
  {
    id: 2,
    title: "Schedulr - Meeting Scheduling Platform",
    description: "Full-stack scheduling app with Google Calendar sync, real-time availability checks, and role-based access.",
    image: "/projects/project2.png",
    tags: ["Next.js", "React", "PostgreSQL", "Prisma", "Clerk", "Google APIs", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/P-ShashiKanthReddy/Schedulrr",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-glow text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, 
            performance, and user experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden card-hover relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-primary">Featured</span>
                  </div>
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-6">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            className="cosmic-button group inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/P-ShashiKanthReddy"
          >
            Explore More Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};