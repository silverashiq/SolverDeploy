// src/component/MySkills.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWordpress,
  FaLaptopCode,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobe,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiShopify,
  SiNextdotjs,
  SiLaravel,
} from "react-icons/si";

// Skill Bar Component
const SkillBar = ({ skill }) => {
  const [fillWidth, setFillWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFillWidth(skill.level * 10);
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
      <div className="text-3xl text-[#343434]">{skill.icon}</div>
      <div className="w-full">
        <h4 className="font-semibold text-[#343434] text-md">{skill.name}</h4>
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
    { name: "Graphic & Branding Design", icon: <SiAdobeillustrator />, level: 9.5 },
    { name: "UI/UX & Web Design", icon: <SiAdobe />, level: 9 },
    { name: "Full-Stack Web Development", icon: <FaLaptopCode />, level: 9 },
    { name: "E-Commerce Solutions", icon: <FaShoppingCart />, level: 9 },
    { name: "Custom Web Development", icon: <SiNextdotjs />, level: 9 },
    { name: "WordPress & CMS Development", icon: <FaWordpress />, level: 8.5 },
    { name: "SEO & Digital Marketing", icon: <FaBullhorn />, level: 8.5 },
    { name: "Frontend Technologies", icon: <FaReact />, level: 9 },
    { name: "Backend Technologies", icon: <FaNodeJs />, level: 9 },
    { name: "Database Management", icon: <SiMongodb />, level: 8.5 },
    { name: "JavaScript & Frameworks", icon: <SiJavascript />, level: 9 },
    { name: "Version Control & Deployment", icon: <FaGithub />, level: 9.5 },
  ];

  return (
    <section className="text-center mb-6 mx-2 md:mx-0 lg:mx-24">
      <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-gray-700 text-center mt-0 lg:mt-4">
        Our Expertise
      </h3>
      <div className="flex justify-center">
        <span className="w-[150px] h-[2px] block mt-4 mb-4 bg-[#D9B592]"></span>
      </div>
      <p className="text-[#343434] text-md sm:text-lg font-light">
        Providing innovative design, development, and marketing solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
