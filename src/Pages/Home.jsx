import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section 1 */}
      <section className="flex flex-col lg:flex-row items-center mx-4 lg:mx-20 gap-5 lg:gap-14 py-10 md:py-10 lg:py-32 px-2 lg:px-[110px]">
        <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl leading-snug text-[#343434] mb-4">
            Seeking a Talented Designer Specializing in Graphics and Website Creation?
          </h1>
          <p className="text-[#343434] text-base sm:text-lg mb-6">
            I am a creative, innovative and intensely focused Graphics Designer and Full-Stack Web Developer with more than 5 years of experience. Let's connect and create something awesome!
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="py-2 px-4 bg-[#D9B592] font-bold rounded-md text-[#343434] hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/book"
              className="py-2 px-4 bg-[#343434] font-bold rounded-md text-[#D9B592] hover:bg-[#D9B592] hover:text-[#343434] transition-colors duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 animate__animated animate__fadeInRight mt-6 lg:mt-0">
          <img
            className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            src="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043799/SolverSilver_Luxury_Logo_Design_Mockup_muvuuw.jpg"
            alt="SolverSilver Luxury Logo Design Mockup"
          />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="flex flex-col bg-[#f1f0f0] py-10 lg:py-24">
        <div className="text-center mb-8">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-4">
            My Services
          </h2>
          <p className="text-[#343434] text-base sm:text-lg">
            Choose any Service for more details
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mx-4 lg:mx-20 gap-10">
          <ServiceCard
            image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043798/Brand_Identity_Logo_Design_a4upyf.jpg"
            title="Brand Identity"
            description="A Brand Identity is made up of what your brand says, your values, and how you communicate your product."
            alt="Business Professional Brand Identity and Logo Design"
          />
          <ServiceCard
            image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043798/Brochure_Flyer_Trifold_Design_ho0dic.jpg"
            title="Print Media"
            description="A form of mass media that shares news or information via printed publications."
            alt="Print Media like Brochure Flyer Bifold Trifold Magazine Booklet Packaging"
          />
          <ServiceCard
            image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043799/Website_frontend_backend_developement_qxlypq.jpg"
            title="Website Design"
            description="Involves planning, conceptualizing, and implementing a business profile."
            alt="Complete Website design backend frontend landing page e-commerce web app"
          />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Section 3 */}
      <SectionThree />
    </>
  );
}

function SectionThree() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col lg:flex-row items-center gap-5 lg:gap-14 py-10 lg:py-32 px-2 lg:px-[110px] ${isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
    >
      <div className={`lg:w-1/2 ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
        <img
          className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043798/Flyer_Brochure_q1ua0g.jpg"
          alt="Logo Flyer brochure social media print media website design"
        />
      </div>
      <div className={`lg:w-1/2 ${isVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
        <h2 className="font-sans font-semibold text-3xl sm:text-4xl leading-snug text-[#343434] mb-4">
          Why Choose Me for Your Projects?
        </h2>
        <p className="text-[#343434] text-base sm:text-lg mb-6">
          <span className="font-semibold">Creative and Technical Expertise:</span> As a Graphics Designer and Full-Stack Web Developer, I combine visual creativity with technical proficiency, ensuring that designs are not only beautiful but functional.
          <br /><br />
          <span className="font-semibold">End-to-End Development:</span> With experience in both front-end and back-end development, I create cohesive digital experiences optimized for performance and usability.
          <br /><br />
          <span className="font-semibold">Client-Centered Approach:</span> I prioritize understanding each client’s unique vision, aligning my work with their brand identity and goals for a personalized touch.
          <br /><br />
          <span className="font-semibold">Quality and Attention to Detail:</span> Every project reflects my commitment to high standards, with careful attention to detail in design, coding, and functionality.
          <br /><br />
          <span className="font-semibold">Timely Delivery:</span> I understand the importance of timelines and deliver work punctually, making me a reliable partner for projects of any scale.
        </p>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "Adobe Illustrator", level: 9 },
    { name: "Adobe Photoshop", level: 8 },
    { name: "HTML", level: 8 },
    { name: "CSS", level: 8 },
    { name: "Tailwind CSS", level: 9 },
    { name: "JavaScript", level: 8 },
    { name: "React", level: 7 },
    { name: "Node.js", level: 7 },
    { name: "Express.js", level: 7 },
    { name: "MongoDB", level: 8 },
    { name: "WordPress", level: 8 },
    { name: "Plugins", level: 8 },
  ];

  return (
    <section className="flex flex-col bg-[#f9f9f9] py-10 lg:py-24">
      <div className="text-center mb-8">
        <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-4">
          My Skills
        </h2>
        <p className="text-[#343434] text-base sm:text-lg">
          Visual representation of my skills
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 lg:mx-20">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill }) {
  const [fillWidth, setFillWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFillWidth(skill.level * 10); // Calculate the width as a percentage
        observer.disconnect(); // Stop observing after filling
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
    <div className="w-full" ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span className="text-[#343434] font-semibold">{skill.name}</span>
        <span className="text-[#343434] font-semibold">{skill.level}/10</span>
      </div>
      <div className="bg-[#D9B592] rounded-full h-4">
        <div
          className="bg-[#343434] h-4 rounded-full"
          style={{ width: `${fillWidth}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
}

function ServiceCard({ image, title, description, alt }) {
  return (
    <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img className="rounded-3xl shadow-md mb-4" src={image} alt={alt} />
      <h3 className="font-semibold text-[#343434] text-lg">{title}</h3>
      <p className="text-[#343434] mt-2">{description}</p>
    </div>
  );
}

export default Home;
