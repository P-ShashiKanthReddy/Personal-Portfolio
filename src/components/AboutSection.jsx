import { Briefcase, Code, User, Lightbulb, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const aboutCards = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive websites and web applications with modern frameworks and best practices."
  },
  {
    icon: User,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and seamless user experiences that delight users."
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Leading projects from conception to completion with agile methodologies and team collaboration."
  },
  {
    icon: Target,
    title: "Programming Skills",
    description: "Proficient in multiple programming languages and modern development frameworks."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Passionate about emerging technologies and innovative problem-solving approaches."
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and exceptional user experience."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
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
            About <span className="text-glow text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Passionate Web Developer & Tech Creator
              </h3>

              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Over the past few years, I've focused on sharpening my frontend and backend development skills to create 
                  <span className="text-primary font-semibold"> dynamic, user-centric, and reliable</span> web and software solutions.
                </p>

                <p className="text-muted-foreground">
                  I'm passionate about creating <span className="text-primary font-semibold">elegant solutions</span> to complex
                  problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the 
                  ever-evolving web landscape.
                </p>
              </div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};