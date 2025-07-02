import { Timeline } from "./Timeline";

const experienceData = [
  {
    date: "Nov 2024 – Dec 2024",
    title: "Software Development Engineer Intern",
    company: "Web Development Project",
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