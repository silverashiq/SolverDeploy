import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      url: "/graphics",
      title: "Graphic Design",
      description:
        "Creating visually appealing graphics for branding, marketing, and more.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_700/dpr_auto/q_auto/v1730043798/Flyer_Brochure_q1ua0g.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      url: "/web",
      title: "Web Development",
      description:
        "Building responsive and functional websites tailored to your needs.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_700/dpr_auto/q_auto/v1731596777/Website_frontend_backend_developement_2_mscvdv.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      url: "",
      title: "Digital Marketing",
      description: "COMING SOON",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_700/dpr_auto/q_auto/v1731597494/3_nyov6m.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      url: "",
      title: "SEO Services",
      description: "COMING SOON",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_700/dpr_auto/q_auto/v1731597494/3_nyov6m.jpg", // Replace with actual image URL
    },

    // Add more services as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-2 md:px-10 lg:px-60">
      <h1 className="text-4xl font-bold text-gray-700">Our Services</h1>
      <div className="flex justify-center">
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
      </div>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        We offer a range of services to help your business succeed. Explore what
        we can do for you!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 px-4 mb-8 md:mb-12 lg:mb-20 ">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.url}
            className="hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
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
