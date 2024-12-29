import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { FiMail, FiPhone } from "react-icons/fi"; // Importing the React icons

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    files: [],
  });

  const [showContactInfo, setShowContactInfo] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedFormats = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
      "application/zip",
      "application/x-rar-compressed",
      "application/pdf",
      "application/vnd.adobe.photoshop",
      "application/msword",
      "application/vnd.ms-excel",
      "application/vnd.ms-powerpoint",
      "text/plain",
      "application/illustrator",
      "application/postscript",
    ];

    const invalidFiles = selectedFiles.filter(
      (file) => !allowedFormats.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      setFileError("Some files are not allowed. Please upload a valid file.");
    } else {
      setFileError("");
      setFormData((prevData) => ({
        ...prevData,
        files: [...prevData.files, ...selectedFiles],
      }));
    }
  };

  const handleRemoveFile = (index) => {
    setFormData((prevData) => {
      const newFiles = [...prevData.files];
      newFiles.splice(index, 1);
      return { ...prevData, files: newFiles };
    });
  };

  const navigate = useNavigate(); // Initialize navigate to use for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formData.files.forEach((file) => {
      formDataToSend.append("files", file); // 'files' matches the backend field
    });

    try {
      const response = await fetch("https://solversilver.com/api/contact", {
        method: "POST",
        body: formDataToSend, // FormData includes all fields and files
      });

      const data = await response.json();
      if (data.success) {
        setSubmissionStatus("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          files: [], // Clear files
        });

        // Wait for 3 seconds, then redirect to the /confirmed page
        setTimeout(() => {
          navigate("/confirmed"); // Redirect to the /confirmed page
        }, 2000);
      } else {
        setSubmissionStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleContactInfo = () => setShowContactInfo((prev) => !prev);
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-700 text-center">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
        </div>
        <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
          Fill out the form below to share the project details and requirements.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1" htmlFor={field}>
                {field === "phone"
                  ? "Phone Number (optional)"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "phone"} // Phone field is not required
                placeholder={
                  field === "phone"
                    ? "For Instant Communication/Chatting"
                    : undefined
                }
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                  submissionStatus.includes("Failed") || fileError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                submissionStatus.includes("Failed") || fileError
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="files">
              Attach Files (Optional)
            </label>
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleFileChange}
              multiple
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
          </div>

          <div className="grid grid-cols-4 gap-1.5 mt-4">
            {formData.files.map((file, index) => (
              <div
                key={index}
                className="relative bg-gray-200 p-2 rounded-lg w-full mb-2 overflow-hidden"
              >
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-black text-white rounded-full p-1"
                  onClick={() => handleRemoveFile(index)}
                >
                  ×
                </button>
                {file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-gray-300 text-xs text-gray-700 truncate p-1">
                    <span className="block text-ellipsis overflow-hidden whitespace-nowrap">
                      {file.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D9B592] text-white rounded-lg py-2 hover:bg-[#343434] transition duration-200 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : null}
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>

          {submissionStatus && (
            <p
              className={`mt-4 text-center ${
                submissionStatus.includes("Failed")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {submissionStatus}
            </p>
          )}
        </form>
      </div>

      <hr className="w-full max-w-lg my-6 border-gray-300 opacity-40" />

      {/* Instant Contact Section */}
<div className="text-center mb-6">
  <button
    onClick={toggleContactInfo}
    className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
    aria-label={showContactInfo ? "Hide Contact Info" : "Show Contact Info"}
  >
    {showContactInfo ? "Hide Contact Info" : "Show Contact Info"}
  </button>

  {showContactInfo && (
    <p
      className="mt-4 text-gray-600 transition-all duration-500 opacity-0 transform ease-in-out flex items-center gap-4"
      style={{
        opacity: showContactInfo ? 1 : 0,
        transform: showContactInfo ? 'translateY(0)' : 'translateY(-20px)',
      }}
    >
      <span className="flex items-center gap-2">
        <FiMail className="text-blue-500" /> {/* Mail icon */}
        <a
          href="mailto:info@solversilver.com"
          className="text-blue-500 hover:underline"
        >
          info@solversilver.com
        </a>
      </span>
      <span className="flex items-center gap-2">
        <FiPhone className="text-blue-500" /> {/* Phone icon */}
        <a
          href="https://wa.me/8801759565304"
          className="text-blue-500 hover:underline"
        >
          +8801759565304
        </a>
      </span>
    </p>
  )}
</div>
    </div>
  );
}

export default Contact;
