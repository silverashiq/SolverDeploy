import React from "react";
import MySkills from "../Components/MySkills";

const About = () => {
  return (
    <section className="min-h-screen bg-[#f1f0f0] py-16 text-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Introduction Section */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <img
            className="rounded-lg mb-6"
            src="https://res.cloudinary.com/dntx46fvh/image/upload/w_900/dpr_auto/q_auto/v1730043799/SolverSilver_Luxury_Logo_Design_Mockup_muvuuw.jpg"
            alt="SolverSilver branding"
          />
          <h2 className="text-4xl font-bold text-gray-700">About Me</h2>
          <div className="flex justify-center">
            <span className="w-[200px] h-[2px] block my-8 bg-[#D9B592]"></span>
          </div>
          <p className="text-md text-gray-700 leading-relaxed text-justify">
            I’m a passionate{" "}
            <span className="font-bold text-gray-800">Graphic Designer</span>{" "}
            and{" "}
            <span className="font-bold text-gray-800">
              Full-Stack Web Developer
            </span>{" "}
            with expertise in the MERN stack (MongoDB, Express.js, React,
            Node.js), CMS platforms, and advanced graphic design tools like
            Adobe Illustrator and Photoshop. My mission is to create visually
            captivating, high-performance web experiences that seamlessly blend
            design and functionality. With a unique combination of design and
            development skills, I take a holistic approach to every project,
            crafting user-centered interfaces that are both stunning and
            intuitive.
          </p>
        </div>

        {/* Graphics and Web Development Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <a href="/graphics">
              <h3 className="text-xl font-semibold text-slate-700 mb-4 text-center py-2 px-4 bg-gray-100 rounded-lg hover:font-bold">
                Graphic Design
              </h3>
            </a>
            <p className="leading-relaxed text-sm text-gray-700 text-justify">
              As a graphic designer, I bring a refined eye for detail, with
              expertise in visual hierarchy, color theory, and typography. My
              designs are tailored to reflect a brand's identity and values with
              a sleek, professional touch. With expertise in Adobe Illustrator
              and Photoshop, I create a wide range of digital assets, including
              compelling visuals for branding, marketing materials, website
              elements, and more. My designs are crafted to enhance user
              engagement, convey messages effectively, and align with a brand's
              identity and values.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <a href="/web">
              <h3 className="text-xl font-semibold text-slate-700 mb-4 text-center py-2 px-4 bg-gray-100 rounded-lg hover:font-bold">
                Web Development
              </h3>
            </a>
            <p className="leading-relaxed text-sm text-gray-700 text-justify">
              My passion lies in crafting interactive and dynamic web
              applications, combining cutting-edge development practices with
              intuitive design principles. With a solid foundation in modern,
              scalable technologies, I deliver responsive, SEO-friendly
              solutions that not only perform seamlessly across devices but also
              offer visually stunning and user-centered interfaces. My
              continuous exploration of new technologies and design trends
              ensures that my work stays innovative and aligned with industry
              standards.
            </p>
          </div>
        </div>

        <hr className="my-16" />

        {/* Skills Section */}
        <MySkills />

        <hr className="my-16" />

        {/* Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
          {[
            {
              title: "My Services",
              description:
                "Explore the services I offer to bring your vision to life.",
              link: "/services",
              buttonText: "View all Services",
            },
            {
              title: "My Portfolio",
              description: "Check out some of my latest work and projects.",
              link: "/portfolio",
              buttonText: "Check my Portfolio",
            },
            {
              title: "Let's Work Together!",
              description: "Have a project in mind? Feel free to reach out.",
              link: "/contact",
              buttonText: "Request a Quote",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 py-8 px-6 rounded-lg shadow-lg text-center bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                className="bg-[#D9B592] font-semibold text-white px-6 py-2 rounded-full shadow-md hover:bg-[#343434]  transition-colors duration-300"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
