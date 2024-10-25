import React from "react";
import { Link } from "react-router-dom";

function Graphics() {
  const graphicsData = [
    {
      id: 1,
      title: "Brand Identity",
      description:
        "Crafting unique visual identities that resonate with target audiences.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Logo Design",
      description:
        "Crafting unique and memorable logos that capture the essence of your brand.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Print Media Design",
      description:
        "Creating compelling print materials, including brochures, posters, and business cards.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Social Media Design",
      description:
        "Developing eye-catching digital assets for websites, social media, and online advertising.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 5,
      title: "Packaging Design",
      description:
        "Designing packaging solutions that stand out on shelves and reflect brand values.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 6,
      title: "User Interface (UI) Design",
      description:
        "Focusing on intuitive and engaging user interfaces for applications and websites.",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    // Add more graphics as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Graphic Design </h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        Explore the diverse range of graphic design services I provide. Please
        select any sector for further details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 mx-4 md:mx-14">
        {graphicsData.map((graphic) => (
          <Link
            to="#"
            className="hover:scale-105 transition-transform duration-300"
          >
            <div
              key={graphic.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={graphic.imageUrl}
                alt={graphic.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {graphic.title}
                </h2>
                <p className="text-gray-600">{graphic.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Graphics;
