import React, { useState, useEffect } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    meetingPlatform: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [timeZone, setTimeZone] = useState(''); // State for time zone

  useEffect(() => {
    // Get the user's time zone when the component mounts
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(userTimeZone);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setSubmissionStatus('Your appointment has been booked! Thank you.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', meetingPlatform: '' });
  };

  const handleContactInquiry = () => {
    window.location.href = '/contact';
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Book an Appointment</h2>
        {submissionStatus && <p className="text-green-600 text-center mb-4">{submissionStatus}</p>}
        
        <p className="text-center text-gray-600 mb-4">Your Time Zone: {timeZone}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="meetingPlatform">Meeting Platform</label>
            <select
              id="meetingPlatform"
              name="meetingPlatform"
              value={formData.meetingPlatform}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a platform</option>
              <option value="Google Meet">Google Meet</option>
              <option value="Zoom">Zoom</option>
              <option value="Skype">Skype</option>
              <option value="Facebook">Facebook</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#D9B592] text-white rounded-lg py-2 hover:bg-[#343434] transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>

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
            E-mail: <a href="mailto:silverashiq@gmail.com" className="text-blue-500">info@solversilver.com</a> <br /> WhatsApp: <a href="https://wa.me/8801686335821" className="text-blue-500">+8801686335821</a>
          </p>
        )}
      </div>

      {/* Divider */}
      <hr className="w-full max-w-lg mb-6 border-gray-300 opacity-40" />

      {/* Inquiry Section */}
      <div className="flex-row md:flex-col items-center mb-6 mx-9 md:mx-0 text-center">
        <span className="text-lg mr-2">Send an E-mail for Inquiry/Quote</span>
        <button
          onClick={handleContactInquiry}
          className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Appointment;
