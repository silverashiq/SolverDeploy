import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
  import { FiMail } from "react-icons/fi"; // Importing the React icons
  import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon


const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    meetingPlatform: "",
    platformLink: "",
    timeZone: "",
  });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [timeZoneList, setTimeZoneList] = useState([]);

  useEffect(() => {
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setFormData((prevData) => ({ ...prevData, timeZone: clientTimeZone }));

    const zones = moment.tz
      .names()
      .map((zone) => {
        const utcOffset = moment.tz(zone).utcOffset() / 60;
        return { zoneName: zone, utcOffset };
      })
      .sort((a, b) => a.utcOffset - b.utcOffset);
    setTimeZoneList(zones);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (formData.date && moment(formData.date).isBefore(moment(), "day"))
      newErrors.date = "Please select a future date.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.meetingPlatform)
      newErrors.meetingPlatform = "Meeting platform is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "timeZone") {
      const selectedZone = timeZoneList.find((zone) => zone.zoneName === value);
      const timeZoneWithOffset = `${selectedZone.zoneName} (UTC ${
        selectedZone.utcOffset >= 0 ? "+" : ""
      }${selectedZone.utcOffset}:00)`;
      setFormData((prevData) => ({ ...prevData, [name]: timeZoneWithOffset }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  
  const navigate = useNavigate(); // Initialize navigate to use for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log form data for testing
    console.log("Form Data:", formData);
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    setSubmissionStatus("");
  
    try {
      const response = await fetch("https://solversilver.com/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.success) {
        setSubmissionStatus(
          "Your appointment has been booked! Check your email for confirmation."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          meetingPlatform: "",
          platformLink: "",
          timeZone: "",
        });
  
        // Wait for 2000ms, then redirect to the /confirmed page
        setTimeout(() => {
          navigate("/confirmedApp"); // Redirect to the /confirmed page
        }, 2000);
      } else {
        throw new Error(data.error || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const toggleContactInfo = () => setShowContactInfo((prev) => !prev);
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-700 text-center">
          Book an Appointment
        </h1>
        <div className="flex justify-center">
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
        </div>
        <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
          Fill out the form below and book an Appointment to discuss the project
          details.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                  errors[field]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={moment().format("YYYY-MM-DD")}
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.date
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.time
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="meetingPlatform"
            >
              Meeting Platform
            </label>
            <select
              id="meetingPlatform"
              name="meetingPlatform"
              value={formData.meetingPlatform}
              onChange={handleChange}
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.meetingPlatform
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Select a platform</option>
              <option value="Google Meet">Google Meet</option>
              <option value="Zoom">Zoom</option>
              <option value="Skype">Skype</option>
              <option value="Facebook">Facebook</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Others">Others</option>
            </select>
            {errors.meetingPlatform && (
              <p className="text-red-500 text-sm">{errors.meetingPlatform}</p>
            )}
          </div>

          {formData.meetingPlatform && (
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="platformLink"
              >
                Details (Optional)
              </label>
              <input
                placeholder="Profile/Room ID, Link or any other details"
                type="text"
                id="platformLink"
                name="platformLink"
                value={formData.platformLink}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="timeZone"
            >
              Time Zone (UTC)
            </label>
            <select
              id="timeZone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Time Zone</option>
              {timeZoneList.map((zone) => (
                <option
                  key={zone.zoneName}
                  value={zone.zoneName}
                  className="text-sm"
                >
                  {zone.zoneName} (UTC {zone.utcOffset >= 0 ? "+" : ""}
                  {zone.utcOffset}:00)
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D9B592] text-white font-semibold rounded-full py-2 hover:bg-[#343434] transition duration-200 flex items-center justify-center"
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
            {isSubmitting ? "Submitting..." : "Book Appointment"}
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

        <div className="mt-8 text-sm text-gray-600">
          By booking an appointment, you agree to our{" "}
          <Link to="/terms" className="text-[#D9B592] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/policy" className="text-[#D9B592] hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>



      {/* Divider */}
      <hr className="w-full max-w-lg my-6 border-gray-300 opacity-40" />

 {/* Instant Contact Section */}
<div className="text-center mb-6">
  <button
    onClick={toggleContactInfo}
    className="bg-[#343434] text-white  py-1 px-4 rounded-full hover:bg-[#D9B592] transition duration-200"
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
          className="text-gray-700 hover:underline"
        >
          info@solversilver.com
        </a>
      </span>
      <span className="flex items-center gap-2">
        <FaWhatsapp className="text-green-500" /> {/* WhatsApp icon */}
        <a
          href="https://wa.me/8801759565304"
          className="text-gray-700 hover:underline"
        >
          +8801759565304
        </a>
      </span>
    </p>
  )}
</div>
    </div>
  );
};

export default Appointment;
