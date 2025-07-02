import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="py-12 px-4 bg-card/50 backdrop-blur-sm relative border-t border-border/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-sm text-muted-foreground flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} P Shashi Kanth Reddy. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            All rights reserved.
          </motion.p>
          
          <motion.a
            href="#hero"
            className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 text-primary hover:text-primary-foreground transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};