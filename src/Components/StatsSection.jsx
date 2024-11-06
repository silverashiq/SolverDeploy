import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaCheckCircle } from "react-icons/fa";

function StatsSection() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true); // Set inView to true when section is in view
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
      className="py-16 bg-[#f1f0f0] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D9B592] opacity-30 transform -rotate-12 -z-10" />

      <div className="text-center mb-12">
        <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#343434] mb-6">
          Trusted by Many, With Proven Results
        </h2>
        <p className="text-[#343434] text-lg sm:text-xl font-light mb-8">
          Here’s a snapshot of my successful collaborations. The numbers speak for themselves.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-16 px-10 lg:px-40">
        {/* Total Orders Completed */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="text-[#D9B592] text-7xl font-semibold mb-2 shadow-lg p-10 rounded-3xl">
            {inView && <CountUp end={1771} duration={2} />}
          </div>
          <h3 className="font-sans text-xl sm:text-xl text-[#343434] font-medium">
            Projects Successfully Completed
          </h3>
        </div>

        {/* Happy Unique Clients */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="text-[#D9B592] text-7xl font-semibold mb-2 shadow-lg p-10 rounded-3xl">
            {inView && <CountUp end={1256} duration={2} />}
          </div>
          <h3 className="font-sans text-xl sm:text-xl text-[#343434] font-medium">
            Satisfied Unique Clients
          </h3>
        </div>

        {/* Client Rated */}
        <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="text-[#D9B592] text-7xl font-semibold mb-2 shadow-lg p-10 rounded-3xl">
            {inView && <CountUp end={1199} duration={2} />}
          </div>
          <h3 className="font-sans text-xl sm:text-xl text-[#343434] font-medium">
            Client Ratings & Feedback
          </h3>
        </div>
      </div>

      {/* Guarantee Note */}
      <div className="mt-12 text-center text-[#343434] text-lg max-w-[80%] mx-auto italic">
        <p className="bg-[#f1f1f1] inline-block py-4 px-8 rounded-lg shadow-md">
          <FaCheckCircle className="inline-block text-green-500 mr-3 text-xl" />
          <span>
            "I assure you that all the statistics provided are accurate and verifiable. I am happy to provide supporting evidence upon request."
          </span>
        </p>
      </div>
    </section>
  );
}

export default StatsSection;
