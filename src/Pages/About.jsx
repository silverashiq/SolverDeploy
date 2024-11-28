// src/pages/About.jsx
import React from "react";
import MySkills from "../Components/MySkills";

const About = () => {
  return (
    <section className="min-h-screen bg-[#f1f0f0] py-16 text-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Introduction Section */}
        <div className="flex flex-col items-center text-center mb-16 px-6 md:px-0 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            About SolverSilver
          </h2>
          <p className="mt-4 text-md text-gray-700 leading-relaxed">
            I’m a dedicated{" "}
            <span className="font-semibold text-blue-900">
              Graphics Designer
            </span>{" "}
            and
            <span className="font-semibold text-blue-900">
              {" "}
              Full-stack Web Developer
            </span>{" "}
            specializing in the MERN stack (MongoDB, Express, React, Node) and
            WordPress. My mission is to craft visually compelling,
            high-performance web experiences that marry aesthetics with
            functionality. My dual expertise in design and development enables
            me to approach each project holistically, ensuring every interface
            is not only beautiful but also user-centered and intuitive.
          </p>

          <div className="mt-8 space-y-8 text-gray-700">
            {/* Graphics Design Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Graphics Design
              </h3>
              <p className="mt-2 leading-relaxed text-sm">
                As a graphics designer, I bring a refined eye for detail, with
                expertise in visual hierarchy, color theory, and typography. My
                designs are tailored to reflect a brand's identity and values
                with a sleek, professional touch. With proficiency in Adobe
                Creative Suite, Figma, and other leading design tools, I create
                cohesive digital assets—from striking logos to detailed website
                layouts—that enhance user engagement and brand recognition.
              </p>
            </div>

            {/* Web Development Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Web Development
              </h3>
              <p className="mt-2 leading-relaxed text-sm">
                My passion lies in building interactive and dynamic web
                applications. With a solid foundation in modern, scalable
                development practices, I deliver responsive, SEO-friendly
                solutions that perform seamlessly across devices. My continuous
                exploration of new technologies keeps my skills sharp and my
                work aligned with industry standards.
              </p>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <MySkills /> {/* Use the MySkills component */}
        {/* Buttons Section */}
        <div className="mt-20 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6  mx-2 md:mx-10 lg:mx-24">
          {/* Services Section */}
          <div className="border border-gray-300 py-8 px-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">My Services</h3>
            <p className="text-sm mb-4">
              Explore the services I offer to bring your vision to life.
            </p>
            <a
              href="/services"
              className="bg-[#D9B592] font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              View Services
            </a>
          </div>

          {/* Portfolio Section */}
          <div className="border border-gray-300 py-8 px-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">My Portfolio</h3>
            <p className="text-sm mb-4">
              Check out some of my latest work and projects.
            </p>
            <a
              href="/portfolio"
              className="bg-[#D9B592] font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              View Portfolio
            </a>
          </div>

          {/* Contact Section */}
          <div className="border border-gray-300 py-8 px-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Let's Work Together!</h3>
            <p className="text-sm mb-4">
              Have a project in mind? Feel free to reach out.
            </p>
            <a
              href="/contact"
              className="bg-[#D9B592] font-semibold text-white px-4 py-2 rounded-md shadow-md hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
