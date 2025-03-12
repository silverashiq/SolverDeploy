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
          <h2 className="text-4xl font-bold text-gray-700">About Us</h2>
          <div className="flex justify-center">
            <span className="w-[200px] h-[2px] block my-8 bg-[#D9B592]"></span>
          </div>
          <p className="text-md text-gray-700 leading-relaxed text-justify">
            We are a team of passionate **designers, developers, and digital strategists** dedicated to crafting **stunning visuals, high-performance websites, and powerful marketing solutions**.  
            With a deep understanding of design principles, web technologies, and business growth strategies, we specialize in delivering **end-to-end solutions** tailored to your unique needs.  
          </p>
        </div>

        {/* Graphics and Web Development Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <a href="/graphics">
              <h3 className="text-xl font-semibold text-slate-700 mb-4 text-center py-2 px-4 bg-gray-100 rounded-lg hover:font-bold">
                Graphic Design & Branding
              </h3>
            </a>
            <p className="leading-relaxed text-sm text-gray-700 text-justify">
              Our design team creates **stunning brand identities, marketing materials, and digital assets** that captivate audiences.  
              We ensure that every design reflects your **brand's essence, mission, and values**, making your business stand out.  
              From **logos and business cards to social media graphics and advertising creatives**, we craft visuals that leave a lasting impression.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <a href="/web">
              <h3 className="text-xl font-semibold text-slate-700 mb-4 text-center py-2 px-4 bg-gray-100 rounded-lg hover:font-bold">
                Web Development & Digital Solutions
              </h3>
            </a>
            <p className="leading-relaxed text-sm text-gray-700 text-justify">
              Our team specializes in **full-stack web development, e-commerce solutions, and digital experiences**.  
              We build **fast, secure, and responsive websites** using the latest technologies, ensuring seamless performance across devices.  
              Whether you need a **custom website, an online store, or an enterprise-grade web application**, we bring your vision to life with cutting-edge solutions.
            </p>
          </div>
        </div>

        <hr className="my-16" />

        {/* Skills Section */}
        <MySkills />

        <hr className="my-16" />

        {/* Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Our Services",
              description: "Discover how we can help grow your business.",
              link: "/services",
              buttonText: "View Services",
            },
            {
              title: "Our Portfolio",
              description: "See our latest projects and success stories.",
              link: "/portfolio",
              buttonText: "View Portfolio",
            },
            {
              title: "Let's Work Together!",
              description: "Have a project in mind? Let's discuss your vision.",
              link: "/contact",
              buttonText: "Get in Touch",
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
                className="bg-[#D9B592] font-semibold text-white px-6 py-2 rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
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
