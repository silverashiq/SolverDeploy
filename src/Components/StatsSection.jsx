import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaCheckCircle, FaTasks, FaUsers, FaStar } from "react-icons/fa";

function StatsSection() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-10 lg:py-24 bg-[#f8f8f8] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D9B592] opacity-30 transform -rotate-12 -z-10" />

      <div className="text-center mb-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-gray-700">
          Trusted by Many, With Proven Results
        </h2>
        <div className="flex justify-center">
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
        </div>
        <p className="text-[#343434] text-lg sm:text-xl font-light mb-24">
          Here’s a snapshot of my successful collaborations. The numbers speak
          for themselves.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-20 px-6 sm:px-10 md:px-16 lg:px-32 pt-">
        {/* Total Orders Completed */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="relative text-[#D9B592] text-4xl font-semibold shadow-lg p-10 rounded-full bg-white border border-[#D9B592]">
            <FaTasks className="absolute text-2xl sm:text-4xl text-[#D9B592] -top-3 -left-8" />
            {inView && <CountUp end={1771} duration={2} />}
          </div>
          <h3 className="font-semibold text-[#343434] text-lg text-center">
            Projects Successfully Completed
          </h3>
        </div>

        {/* Happy Unique Clients */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="relative text-[#D9B592] text-4xl font-semibold shadow-lg p-10 rounded-full bg-white border border-[#D9B592]">
            <FaUsers className="absolute text-3xl sm:text-4xl text-[#D9B592] -top-3 -left-6" />
            {inView && <CountUp end={1256} duration={2} />}
          </div>
          <h3 className="font-semibold text-[#343434] text-lg text-center">
            Satisfied Unique Clients
          </h3>
        </div>

        {/* Client Rated */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="relative text-[#D9B592] text-4xl font-semibold shadow-lg p-10 rounded-full bg-white border border-[#D9B592]">
            <FaStar className="absolute text-3xl sm:text-4xl text-[#D9B592] -top-3 -left-6" />
            {inView && <CountUp end={1199} duration={2} />}
          </div>
          <h3 className="font-semibold text-[#343434] text-lg text-center">
            Client Ratings & Feedback
          </h3>
        </div>
      </div>

      {/* Guarantee Note */}
      <div className="mt-12 text-center text-[#343434] text-lg sm:text-lg max-w-[90%] sm:max-w-[80%] mx-auto italic">
        <p className="bg-[#f1f1f1] inline-block py-4 px-8 rounded-lg shadow-md">
          <FaCheckCircle className="inline-block text-green-500 mr-3 text-xl" />
          <span>
            "I assure you that all the statistics provided are accurate and
            verifiable. I am happy to provide supporting evidence upon request."
          </span>
        </p>
      </div>
    </section>
  );
}

export default StatsSection;
