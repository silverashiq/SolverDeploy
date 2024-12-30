import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from React Icons
import { FaCheckCircle } from 'react-icons/fa'; // Import check icon from React Icons

const FormSubmittedApp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e8e8] py-6">
      <div className="bg-white p-8 rounded-none md:rounded-lg sm:shadow-none md:shadow-lg max-w-lg w-full text-center space-y-10 ">
        {/* Green Circle with White Tick */}
        <div className="flex justify-center animate-pulse">
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
            <FaCheckCircle className="w-28 h-28 text-white animate-pulse" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-semibold text-[#343434]">Appointment Form Successfully Submitted!</h1>

        {/* Explanation */}
        <p className="text-lg text-[#343434]">
          Thank you for reaching out! Your Appointment request has been successfully submitted. 
          Please check your inbox (or spam folder) for an automated confirmation email.
        </p>

        {/* Additional Information */}
        <div className="text-left text-[#343434] space-y-4">
          <p className="font-semibold text-lg">What happens next:</p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>A confirmation email will be sent to you shortly.</li>
            <li>Your request will be personally reviewed by me.</li>
            <li>You will receive a follow-up email with the next steps.</li>
            <li className="leading-8">
                          If your project is urgent, feel free to reach me on WhatsApp:
                          <br />
                          {/* WhatsApp Link with Icon */}
                          <a 
                            href="https://wa.me/8801759565304" 
                            className="flex items-center text-green-500 hover:opacity-70 bg-[#343434] px-4 py-1 my-1 rounded-full inline-flex shadow-sm  justify-center "
                          >
                            <FaWhatsapp className="w-5 h-5 mr-2 text-green-500" />
                            +8801759565304
                          </a>
                        </li>
          </ul>
        </div>

        {/* Jump Links in the Same Line */}
        <div className="mt-6 flex justify-center space-x-6">
        <Link
            to="/"
            className="text-[#D9B592] hover:text-[#343434] underline text-md"
          >
            Go to Home
          </Link>
          <Link
            to="/services"
            className="text-[#D9B592] hover:text-[#343434] underline text-md"
          >
            View All Services
          </Link>
          <Link
            to="/portfolio"
            className="text-[#D9B592] hover:text-[#343434] underline text-md"
          >
            Explore Portfolio
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default FormSubmittedApp;
