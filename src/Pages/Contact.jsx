import React, { useState } from 'react';
import { FiPaperclip } from 'react-icons/fi'; // Importing the attach icon

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    files: [], // Changed to store an array of files
  });
  
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [fileError, setFileError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    let error = '';

    // Check if any file exceeds 5MB
    const isFileTooLarge = selectedFiles.some(file => file.size > 5 * 1024 * 1024); // 5MB in bytes
    if (isFileTooLarge) {
      error = 'File size should not exceed 5MB';
    }

    if (!error) {
      setFormData({ ...formData, files: selectedFiles });
    }
    setFileError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setSubmissionStatus('Your message has been sent! Thank you.');
    setFormData({ name: '', email: '', message: '', files: [] });

    // Clear the status message after 5 seconds
    setTimeout(() => setSubmissionStatus(''), 5000);
  };

  const handleBookAppointment = () => {
    window.location.href = '/book';
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-700">Contact Me</h1>
      <div className='flex justify-center'>
  <span className='w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]'></span>
</div>
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
            aria-label="Your Name"
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
            aria-label="Your Email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Project Details
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Your Message"
          ></textarea>
        </div>

        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 text-sm font-semibold mb-2 mr-2" htmlFor="file">
            Sample images (if any)
          </label>
          <input
            type="file"
            name="files"
            id="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            multiple
            aria-label="Attach Images"
          />
          <label
            htmlFor="file"
            className="cursor-pointer flex items-center bg-gray-200 text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-300 transition duration-200 text-sm"
            aria-label="Choose Files"
          >
            <FiPaperclip className="mr-2" /> Attach Images
          </label>
          {formData.files.length > 0 && (
            <div className="ml-2 text-sm text-gray-600">
              {formData.files.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
          )}
          {fileError && <p className="mt-2 text-red-500 text-sm">{fileError}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#D9B592] text-white rounded-lg py-2 hover:bg-[#343434] transition duration-200"
          aria-label="Send Message"
        >
          Send Message
        </button>

        {submissionStatus && (
          <p className="mt-4 text-green-600 text-center">{submissionStatus}</p>
        )}
      </form>

      {/* Divider */}
      <hr className="w-full max-w-lg my-6 border-gray-300 opacity-40" />

      {/* Instant Contact Section */}
      <div className="flex flex-col items-center mb-6 mx-9 md:mx-0">
        <button
          onClick={toggleContactInfo}
          className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
          aria-label={showContactInfo ? 'Hide Contact Info' : 'Show Contact Info'}
        >
          {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
        </button>
        
        {showContactInfo && (
          <p className="mt-4 text-gray-600 text-center">
            E-mail: <a href="mailto:silverashiq@gmail.com" className="text-blue-500">info@solversilver.com</a> <br /> 
            WhatsApp: <a href="https://wa.me/8801686335821" className="text-blue-500">+8801686335821</a>
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
          aria-label="Book Appointment"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Contact;
