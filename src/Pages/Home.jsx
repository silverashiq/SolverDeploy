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
      className="flex flex-col lg:flex-row items-center w-full gap-5 lg:gap-10 py-10 md:py-10 lg:py-32 bg-cover bg-center px-4 md:px-10 lg:px-24"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dntx46fvh/image/upload/dpr_auto/q_auto/v1734711533/Asset_4_2_aegzbo.png')" }}
      >
        <div className="lg:w-1/2 px-4 lg:px-20 text-center lg:text-left">
          <h1 className="font-sans font-medium text-[18pt] md:text-[27pt] leading-normal text-[#f3f3f3] mb-4">
            Looking for a Talented Designer Specializing in{" "}
            <span className="font-bold uppercase">Graphics</span> and{" "}
            <span className="font-bold uppercase">Website</span> Design?
          </h1>
          <span className="w-[200px] h-[2px] block my-4 mx-auto lg:mx-0 bg-[#D9B592]"></span>
          <p className="text-[#b8b8b8] text-base sm:text-lg mb-6">
            With over 5 years of experience as a Graphics Designer and
            Full-Stack Web Developer, I craft innovative, high-quality designs
            and responsive websites tailored to your needs. <br /> Let’s
            collaborate to turn your vision into a powerful digital experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start mx-auto sm:mx-0">
            <Link
              to="/contact"
              className="py-4 px-8 bg-[#D9B592] font-bold rounded-md text-center text-   hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/book"
              className="py-4 px-8 bg-[#D9B592] font-bold rounded-md text-center text-[#343434] hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 px-4 lg:px-20 animate__animated animate__fadeInRight mt-6 lg:mt-0">
          <img
            className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
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
        <div className="flex flex-col sm:flex-row justify-center mx-4 lg:mx-20 gap-10">
          <Link to="/graphics">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1733607471/SolverSilver_Luxury_Logo_Design_rgouqz.png"
              title="Logo Design & Brand Identity"
              description="Create a compelling brand identity that resonates with your audience. My logo design reflects your brand's core values and ensures effective communication."
              alt="Business Professional Brand Identity and Logo Design, Custom Logo, Visual Identity, Graphic Design, Branding Solutions, Corporate Identity, Logo Development"
            />
          </Link>

          <Link to="/graphics">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043798/Brochure_Flyer_Trifold_Design_ho0dic.jpg"
              title="Social & Print Media Design"
              description="Enhance your brand presence with engaging social media content and eye-catching print materials like brochures and flyers."
              alt="Print Media like Brochure Flyers Brochures Stationery Books Magazines Catalogs Annual reports Proposals Billboards Posters Bifold Trifold Magazine Booklet Packaging"
            />
          </Link>

          <Link to="/web">
            <ServiceCard
              image="https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1730043799/Website_frontend_backend_developement_qxlypq.jpg"
              title="Website Design & Development"
              description="Elevate your online presence with responsive websites tailored to your business needs, combining aesthetic design with robust functionality."
              alt="Complete Website design backend frontend landing page e-commerce web app, Web Development, Responsive Design, User Experience, UX/UI Design, Custom Websites, Digital Solutions"
            />
          </Link>
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
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-12 text-center lg:text-start">
            Why Choose Me?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-4xl text-[#D9B592]" />
              <div>
                <h3 className="font-semibold text-[#343434] text-lg mb-1">
                  Creative and Technical Expertise
                </h3>
                <p className="text-[#343434]">
                  As a Graphics Designer and Full-Stack Web Developer, I combine
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
    <div className="flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300 max-w-[400px] lg:max-w-[600px] min-h-[500px]">
      <div className="w-full aspect-[720/526]">
        <img
          className="rounded-3xl shadow-md w-full h-full object-cover"
          src={image}
          alt={alt}
          loading="lazy" // Lazy load image
        />
      </div>
      <div className="flex flex-col flex-grow items-center py-4">
        <h4 className="text-xl sm:text-2xl text-[#343434] font-semibold mb-3">
          {title}
        </h4>
        <p className="text-[#343434]">{description}</p>
      </div>
    </div>
  );
}

export default Home;
