import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="py-24 px-4 relative" ref={containerRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Work Experience</span>
        </h2>
        
        <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-card border border-border">
                  <div className="w-4 h-4 p-2 border rounded-full bg-primary/20 border-primary" />
                </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-3xl text-foreground">
                  <h3 className="text-2xl">{item.date}</h3>
                  <h3 className="text-xl text-primary">{item.title}</h3>
                  <h3 className="text-lg text-muted-foreground">{item.company}</h3>
                </div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="block mb-4 text-xl font-bold text-left text-foreground md:hidden">
                  <h3 className="text-lg">{item.date}</h3>
                  <h3 className="text-primary">{item.title}</h3>
                  <h3 className="text-muted-foreground">{item.company}</h3>
                </div>
                <div className="space-y-4">
                  {item.contents.map((content, contentIndex) => (
                    <div key={contentIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/50 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};