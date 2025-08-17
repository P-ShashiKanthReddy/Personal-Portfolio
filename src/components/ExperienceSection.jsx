import { Timeline } from "./Timeline";
import { Award, FileText } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    date: "Jul 2025 – Aug 2025",
    title: "Full Stack Web Development Intern",
    company: "Future Interns",
    certificates: [
      {
        name: "Internship Certificate",
        url: "/P SHASHI KANTH REDDY Internship Certificate.pdf",
        type: "certificate"
      },
      {
        name: "Letter of Recommendation",
        url: "/P SHASHI KANTH REDDY LoR.pdf",
        type: "letter"
      }
    ],
    contents: [
      "Successfully completed a comprehensive 1-month internship in Full Stack Web Development, demonstrating outstanding performance and technical proficiency throughout the program.",
      "Developed and deployed multiple full-stack projects including a responsive personal portfolio website, a feature-rich mini e-commerce storefront with shopping cart functionality, and a modern AI-driven website with complete rebranding.",
      "Gained extensive hands-on experience with modern web technologies including HTML5, CSS3, JavaScript ES6+, React.js for frontend development, and Node.js with MongoDB for robust backend solutions.",
      "Mastered responsive UI/UX design principles, database integration techniques, RESTful API development, and modern deployment practices using cloud platforms.",
      "Collaborated effectively in an agile development environment, participating in code reviews, sprint planning, and delivering high-quality solutions within tight deadlines."
    ]
  },
  {
    date: "Nov 2024 – Dec 2024",
    title: "Software Development Engineer Intern",
    company: "Web Development Project",
    certificates: [],
    contents: [
      "Developed a responsive web application delivering IPO-related information using React.js, Django, and PostgreSQL, with a focus on front-end development and REST API integration.",
      "Designed intuitive, mobile-friendly user interfaces with HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS to ensure seamless user experience.",
      "Collaborated in an agile team to implement features, resolve bugs, and participate in code reviews, contributing to improved code quality and system stability.",
      "Managed structured data with PostgreSQL and built scalable backend services using Django and Python."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/30">
      <Timeline data={experienceData} />
    </section>
  );
};