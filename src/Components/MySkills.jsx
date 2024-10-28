// src/component/MySkills.jsx
import React, { useEffect, useRef, useState } from "react";

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
    <div ref={skillRef}>
      <h4 className="text-xl font-semibold">{skill.name}</h4>
      <p className="text-sm mb-2">{skill.description}</p>
      <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${fillWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

// Skills Section Component
const MySkills = () => {
  const skills = [
    { name: "Adobe Illustrator", level: 9, description: "Expert in Adobe Suite and creative design." },
    { name: "Adobe Photoshop", level: 9, description: "Proficient in photo editing and manipulation." },
    { name: "HTML", level: 9, description: "Strong understanding of semantic HTML." },
    { name: "CSS", level: 8, description: "Expert in CSS and responsive design." },
    { name: "Tailwind CSS", level: 9, description: "Proficient in utility-first CSS framework." },
    { name: "JavaScript", level: 8, description: "Experienced in JavaScript ES6+." },
    { name: "React", level: 9, description: "Skilled in building dynamic React applications." },
    { name: "Node.js", level: 9, description: "Understanding of server-side JavaScript." },
    { name: "Express.js", level: 8, description: "Experienced in building REST APIs." },
    { name: "MongoDB", level: 8, description: "Proficient in NoSQL database management." },
    { name: "WordPress", level: 8, description: "Experienced in creating custom themes and plugins." },
    { name: "GitHub", level: 9, description: "Skilled in developing and managing projects on GitHub." },
  ];

  return (
    <section className="mb-12">
      <h3 className="text-3xl font-semibold mb-6 text-center">My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
