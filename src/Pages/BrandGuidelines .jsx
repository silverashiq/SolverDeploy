import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const BrandGuidelines = () => {
const guidelineSlides = [
  {
    url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732289156/Preview_2_wx4ifz.jpg",
    alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
  },
  {
    url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205512/CE_Mockup_goyh9s.jpg",
    alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
  },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/Asset_9_cqybxk.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205525/Req_Mockup_aszzci.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205522/QIA_Mockup_nj0v1a.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205521/NF_Mockup_xdca7f.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205520/M_Mockup_wb0w8b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/K_Mockup_otrupb.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205508/Asset_5_zmq7ap.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205509/3d_Mockup-1_qkncgh.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/HSU_Mockup_hx6xcc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205512/Asset_12_rylbgc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/A_Mockup_nmldii.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205513/JL_Mockup_1_bdxevl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/MB_Mockup_d7uzqt.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/BK_Mockup_uof5mh.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/Asset_8_unywd2.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205521/MV_Mockup_envhns.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/3d_Mockup_12_lfb6gn.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={guidelineSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-gray-700 mb-4">
              Brand Identity Design
            </h1>
            <p className="text-lg text-[#525252]">
              Build a consistent and professional brand image with detailed
              Brand Guidelines, Color Palettes, Typography, and more. Elevate
              your business identity with custom designs for your brand’s
              presence across all channels.
            </p>
          </div>
        </div>

        {/* Client Requirements Section */}
        <section className="bg-[#f9f8f6] py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Requirements
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Brief description of your brand/business</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Logo Title (if not already created)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Slogan (if any)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Color Palette preferences (if any)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Typography preferences</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Brand guidelines for logo use</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>
                  Stationery designs (business cards, letterheads, envelopes
                  etc.)
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Social media kit</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Any additional notes or ideas you may have</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Budget (if any)</p>
              </li>
            </ul>
            <p className="mt-6 text-lg text-[#525252] italic text-center">
              * The cost of the project will depend on the specific designs and
              elements you wish to include, such as number of stationery items,
              social media templates, and the complexity of the brand
              guidelines. Custom packages can be created based on your specific
              budget if necessary.
            </p>
          </div>
        </section>

        {/* You will get */}
        <section className="bg-[#f9f8f6] shadow-md rounded-xl py-12 px-6 md:px-12 lg:px-20 mx-4 lg:mx-32 mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            You will get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Everything from Logo package",
              "Detailed Brand Guidelines",
              "Color palette with hex codes",
              "Typography with suggested fonts",
              "Logo usage guidelines (size, clear space, etc.)",
              "Stationery design files (business cards, letterhead, etc.)",
              "Social Media Kit",
              "Unlimited revisions until satisfaction",
              "After sale-services",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-md hover:shadow-lg transition"
              >
                <span className="text-[#D9B592] font-bold text-xl">•</span>
                <p className="text-[#525252] font-medium">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Styles */}
        <section className="text-center mb-16 px-6 lg:px-32">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Brand Elements I provide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Brand Guidelines Document",
              "Logo Design & Variations",
              "Color Palette & Typography",
              "Business Stationery Design",
              "Social Media Kit",
              "Custom Templates & Designs",
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 border-1 rounded-xl hover:shadow-lg transition bg-[#f9f8f6] text-[#343434]"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-[#D9B592] text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Strong Brand Identity?
          </h2>
          <p className="mb-8 text-lg">
            Let’s craft a professional and consistent brand that resonates with
            your target audience.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandGuidelines;
