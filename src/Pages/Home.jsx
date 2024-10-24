import React from 'react';
import Bannerpic3 from "../assets/Bannerpic3.jpg";
import Bannerpic from "../assets/Bannerpic.jpg";
import Brand from "../assets/Brand.jpg";
import Brochure from "../assets/Brochure.jpg";
import Website from "../assets/Website.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section 1 */}
      <section className="flex flex-col lg:flex-row items-center mx-4 lg:mx-20 gap-5 lg:gap-14  py-10 md:py-10 lg:py-32 px-2  lg:px-[110px]">
        <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl leading-snug text-[#343434] mb-4">
            Are you looking for a Designer with stellar skills and experience in Graphics and Website?
          </h1>
          <p className="text-[#343434] text-base sm:text-lg mb-6">
            I am a creative, innovative and intensely focused Graphics and Website Designer with more than 5 years of experience. 
            Contact me and let's create something awesome!
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="py-2 px-4 bg-[#D9B592] font-bold rounded-md text-[#343434] hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300">
              Send an E-mail
            </Link>
            <Link to="/book" className="py-2 px-4 bg-[#343434] font-bold rounded-md text-[#D9B592] hover:bg-[#D9B592] hover:text-[#343434] transition-colors duration-300">
              Book an Appointment
            </Link >
          </div>
        </div>
        <div className="lg:w-1/2 animate__animated animate__fadeInRight mt-6 lg:mt-0">
          <img className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300" src={Bannerpic3} alt="banner" />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="flex flex-col bg-[#f1f0f0] py-10 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-4">My Services</h1>
          <p className="text-[#343434] text-base sm:text-lg">Choose any Service for more details</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mx-4 lg:mx-20 gap-10">
          <ServiceCard 
            image={Brand} 
            title="Brand Identity" 
            description="A Brand Identity is made up of what your brand says, your values, and how you communicate your product."
          />
          <ServiceCard 
            image={Brochure} 
            title="Print Media" 
            description="A form of mass media that shares news or information via printed publications."
          />
          <ServiceCard 
            image={Website} 
            title="Website Design" 
            description="Involves planning, conceptualizing, and implementing a business profile."
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col lg:flex-row items-center gap-5 lg:gap-14  py-10 lg:py-32 px-2  lg:px-[110px]">
        <div className="lg:w-1/2 animate__animated animate__fadeInLeft mb-6 lg:mb-0">
          <img className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300" src={Bannerpic} alt="banner" />
        </div>
        <div className="lg:w-1/2 animate__animated animate__fadeInRight">
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl leading-snug text-[#343434] mb-4">
            Why choose me for your Graphics/Website projects?
          </h1>
          <p className="text-[#343434] text-base sm:text-lg mb-6">
            I collaborate with clients who aim for perfection! Lifetime Customer Service is my specialty. I guide clients 
            every step of the way, before and after the project. 100% Customer Satisfaction is my goal.
          </p>
          <Link to="/portfolio" className="py-2 px-4 bg-[#D9B592] font-bold rounded-md text-[#343434] hover:bg-[#343434] hover:text-[#D9B592] transition-colors duration-300">
            Client's Feedback 
          </Link >
        </div>
      </section>
    </>
  );
}

function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img className="rounded-3xl shadow-md mb-4" src={image} alt={title} />
      <h4 className="font-semibold text-[#343434] text-lg">{title}</h4>
      <p className="text-[#343434] mt-2">{description}</p>
    </div>
  );
}

export default Home;
