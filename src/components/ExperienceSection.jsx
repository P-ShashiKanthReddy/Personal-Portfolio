import { Calendar, Code, Database, Users } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Work Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="gradient-border p-8 card-hover">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2 lg:mb-0">
                    Web Development Project
                  </h3>
                  <div className="flex items-center justify-center lg:justify-end gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Nov 2024 – Dec 2024</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 text-left">
                    <div className="p-2 rounded-full bg-primary/10 mt-1 flex-shrink-0 mx-auto sm:mx-0">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed a responsive web application delivering IPO-related information using 
                      <span className="text-primary font-medium"> React.js</span>, 
                      <span className="text-primary font-medium"> Django</span>, and 
                      <span className="text-primary font-medium"> PostgreSQL</span>, with a focus on front-end development and REST API integration.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 text-left">
                    <div className="p-2 rounded-full bg-primary/10 mt-1 flex-shrink-0 mx-auto sm:mx-0">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Designed intuitive, mobile-friendly user interfaces with 
                      <span className="text-primary font-medium"> HTML5</span>, 
                      <span className="text-primary font-medium"> CSS3</span>, 
                      <span className="text-primary font-medium"> JavaScript</span>, 
                      <span className="text-primary font-medium"> Bootstrap</span>, and 
                      <span className="text-primary font-medium"> Tailwind CSS</span> to ensure seamless user experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 text-left">
                    <div className="p-2 rounded-full bg-primary/10 mt-1 flex-shrink-0 mx-auto sm:mx-0">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Collaborated in an agile team to implement features, resolve bugs, and participate in code reviews, contributing to improved code quality and system stability.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 text-left">
                    <div className="p-2 rounded-full bg-primary/10 mt-1 flex-shrink-0 mx-auto sm:mx-0">
                      <Database className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Managed structured data with 
                      <span className="text-primary font-medium"> PostgreSQL</span> and built scalable backend services using 
                      <span className="text-primary font-medium"> Django</span> and 
                      <span className="text-primary font-medium"> Python</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};