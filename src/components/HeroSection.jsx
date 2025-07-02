import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      </div>

      <div className="container max-w-6xl mx-auto text-center z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="text-glow bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                P Shashi Kanth Reddy
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Passionate about <span className="text-primary font-semibold">technology and innovation</span>, 
              I am currently pursuing a B.Tech in Computer Science Engineering with a focus on 
              <span className="text-primary font-semibold"> software development</span> and 
              <span className="text-primary font-semibold"> emerging technologies</span>.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects" className="cosmic-button group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
            
            <div className="flex gap-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                Resume
              </a>
              
              <a
                href="#contact"
                className="glass-card px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-2 group"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-sm text-muted-foreground mb-2 animate-pulse">Scroll to explore</span>
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary glow-effect" />
        </div>
      </motion.div>
    </section>
  );
};