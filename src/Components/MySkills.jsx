// src/component/MySkills.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobe,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

// Skill Bar Component
const SkillBar = ({ skill }) => {
  const [fillWidth, setFillWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFillWidth(skill.level * 10); // Convert skill level to percentage
        observer.disconnect();
      }
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div ref={skillRef} className="flex items-center space-x-4">
      <div className="text-4xl text-[#343434]">{skill.icon}</div>
      <div className="w-full">
        <h4 className="font-semibold text-[#343434] text-lg">{skill.name}</h4>
        <p className="text-sm mb-2">{skill.description}</p>
        <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#D9B592] h-2 rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${fillWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Skills Section Component
const MySkills = () => {
  const skills = [
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator />,
      level: 9.75,
      description: "Expert in Adobe Suite and creative design.",
    },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobe />,
      level: 9,
      description: "Proficient in photo editing and manipulation.",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: 9,
      description: "Strong understanding of semantic HTML.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: 8,
      description: "Expert in CSS and responsive design.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 9,
      description: "Proficient in utility-first CSS framework.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 8,
      description: "Experienced in JavaScript ES6+.",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: 9,
      description: "Skilled in building dynamic React applications.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: 9,
      description: "Understanding of server-side JavaScript.",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: 8,
      description: "Experienced in building REST APIs.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 8,
      description: "Proficient in NoSQL database management.",
    },
    {
      name: "WordPress",
      icon: <FaWordpress />,
      level: 8.5,
      description:
        "Experienced in creating/managing CMS-based websites and plugins.",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: 9,
      description: "Skilled in developing and managing projects on GitHub.",
    },
  ];
  return (
    <section className="text-center mb-8">
      <h3 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] text-center mb-6">
      My Expertise
      </h3>
      <p className="text-[#343434] text-lg sm:text-xl font-light">
      Expert in design and development, delivering innovative solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
