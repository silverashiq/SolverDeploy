import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [showContactInfo, setShowContactInfo] = useState(false); // New state for contact info

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleBookAppointment = () => {
    window.location.href = '/book'; // Simple redirection
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo); // Toggle the contact info
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        I'd love to hear from you! Please fill out the form below to get in touch.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D9B592] text-white rounded-lg py-2 hover:bg-[#343434] transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Divider */}
      <hr className="w-full max-w-lg my-6 border-gray-300 opacity-40" />

      {/* Instant Contact Section */}
      <div className="flex flex-col items-center mb-6 mx-9 md:mx-0">
        <button
          onClick={toggleContactInfo}
          className="bg-[#D9B592] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#343434] transition duration-200"
        >
          {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
        </button>
        
        {showContactInfo && (
          <p className="mt-4 text-gray-600 text-center">
            E-mail: <a href="mailto:silverashiq@gmail.com" className="text-blue-500">info@solversilver.com</a> <br/> WhatsApp: <a href="https://wa.me/8801686335821" className="text-blue-500">+8801686335821</a>
          </p>
        )}
      </div>

            {/* Divider */}
            <hr className="w-full max-w-lg mb-6 border-gray-300 opacity-40" />

      {/* Booking Section */}
      <div className="flex-row md:flex-col items-center mb-6 mx-9 md:mx-0 text-center">
        <span className="text-lg mr-2">Want to book an Appointment/Online meeting?</span>
        <button
          onClick={handleBookAppointment}
          className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Contact;
