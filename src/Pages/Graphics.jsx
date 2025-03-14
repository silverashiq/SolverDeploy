import React from "react";
import { Link } from "react-router-dom";

function Graphics() {
  const graphicsData = [
    {
      id: 1,
      url: "/logo",
      title: "Logo Design",
      description:
        "Crafting any kind of unique and memorable logos that capture the essence of your brand.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731599786/Brand_Identity_Logo_Design3_hlfcxn.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      url: "/brand",
      title: "Brand Guidelines",
      description:
        "Crafting unique visual identities and style guide that resonate with target audiences.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731598363/Logo_Brand_identy_style_guide_design_jvuonh.png", // Replace with actual image URL
    },
    {
      id: 3,
      url: "/print",
      title: "Print Media Design",
      description:
        "Creating compelling print materials, including brochures, posters, and business cards.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731684979/Brochure_Flyer_Trifold_Design_3_wkvqcf.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      url: "/social",
      title: "Social Media Design",
      description:
        "Developing eye-catching digital assets for websites, social media, and online advertising.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731688976/Social_Media_post_Design_iltuuh.jpg", // Replace with actual image URL
    },
    {
      id: 5,
      url: "/pack",
      title: "Packaging Design",
      description:
        "Designing packaging solutions that stand out on shelves and reflect brand values.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731688975/Product_Packaging_design_uihxji.jpg", // Replace with actual image URL
    },

    {
      id: 6,
      url: "/tshirt",
      title: "T-Shirt Design",
      description:
        "Creative & Unique T-Shirt Designs Tailored Just for You, Bringing Your Ideas to Life!.",
      imageUrl:
        "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1731688975/Tishirt_vector_art_design_cr2hab.jpg", // Replace with actual image URL
    },
    // Add more graphics as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="py-10 px-2 md:mx-10 lg:mx-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-700">Graphic Design </h1>
        <div className="flex justify-center">
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
        </div>
        <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
          Explore the diverse range of graphic design services We provide. Please
          select any sector for further details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 px-4 mx-4 md:mx-14 mb-10 md:mb-20">
          {graphicsData.map((graphic) => (
            <Link
              // to="#"
              to={graphic.url}
              className="hover:scale-105 transition-transform duration-300"
            >
              <div
                key={graphic.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={graphic.imageUrl}
                  alt={graphic.title}
                  className="w-full h-auto object-cover "
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-center text-[#D9B592] mb-2 ">
                    {graphic.title}
                  </h2>
                  <p className="text-gray-600 text-center mb-2">
                    {graphic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
