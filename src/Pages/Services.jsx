import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      url: "/graphics",
      title: "Graphic Design",
      description: "Creating visually appealing graphics for branding, marketing, and more.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 2,
      url: "/web",
      title: "Web Development",
      description: "Building responsive and functional websites tailored to your needs.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 3,
      url: "#",
      title: "App Development",
      description: "COMING SOON",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 4,
      url: "/#",
      title: "Digital Marketing",
      description: "COMING SOON",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 5,
      url: "/#",
      title: "SEO Services",
      description: "COMING SOON",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 5,
      url: "/#",
      title: "Video Editing",
      description: "COMING SOON",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        We offer a range of services to help your business succeed. Explore what we can do for you!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
        {services.map((service) => (
          <Link key={service.id} to={service.url} className="hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
