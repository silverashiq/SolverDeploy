import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPaintBrush,
  FaLink,
  FaRegClipboard,
  FaSearch,
  FaClock,
  FaInfinity,
} from "react-icons/fa";

// Static imports for components
import MySkills from "../Components/MySkills";
import StatsSection from "../Components/StatsSection";
import ReviewSection from "../Components/ReviewSection";

function Home() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Disconnect after it’s visible
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
    <>
      {/* Hero Section 1 */}
      <section
        className="flex flex-col lg:flex-row items-center justify-center w-full gap-5 py-10 md:py-10 lg:py-32 bg-cover bg-center px-4 md:px-24  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dntx46fvh/image/upload/dpr_auto/q_auto/v1734711533/Asset_4_2_aegzbo.png')",
        }}
      >
        {/* Left Content */}
        <div
          className="lg:w-1/2 px-4 text-center lg:text-left shrink-content"
          style={{
            flex: "1 1 50%",
          }}
        >
          <h1 className="font-sans font-medium text-[16pt] sm:text-[18pt] md:text-[20pt] lg:text-[24pt] xl:text-[27pt] leading-normal text-[#f3f3f3] mb-4">
            Looking for a Skilled Designer/Developer Specializing in{" "}
            <br />
            <span className="font-bold uppercase text-[#D9B592]">
              Graphic
            </span>{" "}
            and{" "}
            <span className="font-bold uppercase text-[#D9B592]">Website</span>{" "}
            Design?
          </h1>
          <span className="w-[150px] sm:w-[200px] lg:w-[220px] h-[2px] block my-4 mx-auto lg:mx-0 bg-[#D9B592]"></span>
          <p className="text-[#b8b8b8] text-base sm:text-lg lg:text-base xl:text-lg mb-6 ">
            With over 5 years of experience as a Graphic Designer and Full-Stack
            Web Developer,
            <br /> I craft innovative, high-quality designs and responsive
            websites tailored to your needs. <br /> Let’s collaborate to turn
            your vision into a powerful digital experience.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-4 justify-center lg:justify-start gap-4">
  <Link
    to="/contact"
    className="py-2 px-6 bg-white text-[13pt] font-semibold rounded-full text-center text-[#343434] sm:hover:bg-[#D9B592] sm:hover:text-[#343434] sm:transition-all sm:duration-500 sm:ease-in-out sm:hover:px-10"
  >
    Request a Quote
  </Link>
  <Link
    to="/appointment"
    className="py-2 px-6 bg-white text-[13pt] font-semibold rounded-full text-center text-[#343434] sm:hover:bg-[#D9B592] sm:hover:text-[#343434] sm:transition-all sm:duration-500 sm:ease-in-out sm:hover:px-10"
  >
    Book an Appointment
  </Link>
</div>

        </div>

        {/* Right Image */}
        <div
          className="lg:w-1/2  flex justify-around animate__animated animate__fadeInRight mt-6 lg:mt-0 "
          style={{
            flex: "1 1 50%",
          }}
        >
          <img
            className="max-w-[800px] w-full h-auto rounded-3xl shadow-lg object-contain"
            src="https://res.cloudinary.com/dntx46fvh/image/upload/w_700/dpr_auto/q_auto/v1733607813/SolverSilver_klttwk.jpg"
            alt="SolverSilver Luxury Logo Design Mockup"
            width="700"
            height="500"
          />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="flex flex-col bg-[#e9e8e8] py-10 px-0 md:px-6 lg:px-20 lg:py-24">
        <div className="text-center mb-8">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-gray-700">
            Essential Services
          </h2>
          <div className="flex justify-center">
            <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
          </div>
          <p className="text-[#343434] text-lg sm:text-xl font-light mb-10">
            Tailored solutions to meet your business needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mx-4 lg:mx-20 gap-12 md:10 lg:14">
          <Link to="/Logo">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1733607471/SolverSilver_Luxury_Logo_Design_rgouqz.png"
              title="Logo Design & Branding"
              description="Create a distinctive logo that reflects your brand's identity. My logo designs are tailored to capture your brand’s essence, ensuring recognition and a strong visual presence"
              alt="Business Professional Logo Design, Custom Logo, Visual Identity, Graphic Design, Branding Solutions, Corporate Identity, Logo Development"
            />
          </Link>

          <Link to="/graphics">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043798/Brochure_Flyer_Trifold_Design_ho0dic.jpg"
              title="Digital & Print Media Design"
              description="Create impactful brochures and print media designs that effectively communicate your message. My designs will stand out and capture attention in digital and physical formats."
              alt="Print Media like Brochure Flyers Brochures Stationery Books Magazines Catalogs Annual reports Proposals Billboards Posters Bifold Trifold Magazine Booklet Packaging"
            />
          </Link>

          <Link to="/web">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043799/Website_frontend_backend_developement_qxlypq.jpg"
              title="Website Design & Development"
              description="Create responsive websites that captivate your audience, combining sleek design with smooth functionality to enhance user experience and elevate your brand presence online."
              alt="Complete Website design backend frontend landing page e-commerce web app, Web Development, Responsive Design, User Experience, UX/UI Design, Custom Websites, Digital Solutions"
            />
          </Link>
        </div>

        {/* More */}
        <div className=" text-white pt-2 md:pt-14 pb-14 md:pb-14 lg:pb-1 text-center px-6 lg:px-0">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <Link
              to="/services"
              className="px-6 py-2  bg-[#464646] text-[#e9e8e8] font-semibold rounded-full shadow-md  hover:bg-[#D9B592] hover:text-[#343434]   transition-colors duration-300"
            >
              View all Services
            </Link>
            <Link
              to="/portfolio"
              className="px-6 py-2  bg-[#464646] text-[#e9e8e8] rounded-full font-semibold shadow-md  hover:bg-[#D9B592] hover:text-[#343434]   transition-colors duration-300"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div>
        <StatsSection />
      </div>

      {/* Why Choose Me Section */}
      <section
        ref={sectionRef}
        className="max-w-[1400px] mx-auto px-4 lg:px-10 py-12 md:py-20 lg:py-28 bg-white text-[#343434] flex flex-col lg:flex-row items-start lg:items-center gap-8"
      >
        {/* Left Side Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start sm:mx-6 md:mx-8">
          <img
            className="w-full lg:w-[90%] md:w-[80%] h-auto px-10 lg:px-0"
            src="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730997963/Pc_table_cql0vl.png"
            alt="Workstation setup"
            width="800"
            height="600"
            loading="lazy" // Lazy load image
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-2/3 space-y-6 lg:space-y-8 lg:pl-8 px-0 md:px-8 lg:px-0">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-10 text-center lg:text-start">
            Why Choose Me?
          </h2>

          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-4xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Creative and Technical Expertise
                </h3>
                <p className="text-[#343434]">
                  As a Graphic Designer and Full-Stack Web Developer, I combine
                  visual creativity with technical proficiency, ensuring designs
                  are beautiful and functional.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaLink className="text-4xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  End-to-End Development
                </h3>
                <p className="text-[#343434]">
                  With experience in front-end and back-end development, I
                  create cohesive digital experiences optimized for performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRegClipboard className="text-4xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Client-Centered Approach
                </h3>
                <p className="text-[#343434]">
                  I prioritize understanding each client’s vision, aligning my
                  work with their brand identity and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaSearch className="text-3xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Quality and Attention to Detail
                </h3>
                <p className="text-[#343434]">
                  My commitment to high standards is reflected in every project,
                  focusing on design, coding, and functionality.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-3xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Timely Delivery
                </h3>
                <p className="text-[#343434]">
                  I respect timelines and deliver punctually, making me a
                  reliable partner for projects of any scale.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaInfinity className="text-3xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Unlimited Revisions
                </h3>
                <p className="text-[#343434]">
                  I will revise and make any tweaks or modifications until the
                  design is finalized, and offer after-sale service as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div className="py-10 md:py-20 px-10 md:px-40 bg-[#faf7f7]">
        <MySkills />
      </div>

      {/* Testimonial */}
      <ReviewSection />
    </>
  );
}

function ServiceCard({ image, title, description, alt }) {
  return (
    <div className="flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300 max-w-[400px] lg:max-w-[600px] min-h-[500px] rounded-3xl">
      <div className="w-full aspect-[720/526]">
        <img
          className="rounded-3xl shadow-md w-full h-full object-cover"
          src={image}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow items-center py-4">
        <h4 className="text-xl sm:text-2xl text-[#D9B592] font-semibold mb-3">
          {title}
        </h4>
        <p className="text-[#343434] px-4">{description}</p>
      </div>
    </div>
  );
}

export default Home;
