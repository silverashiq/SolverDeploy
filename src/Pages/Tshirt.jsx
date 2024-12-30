import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const Tshirt = () => {
  const tshirtSlides = [
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Asset_10T_shirt_Design_jmyphj.jpg",
      alt: "Stylish T-shirt design with a modern aesthetic",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Asset_8T_shirt_Design_xbsbd5.jpg",
      alt: "Creative T-shirt design showcasing bold patterns",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Tshirts_36_qvuqds.jpg",
      alt: "Minimalist T-shirt design for everyday wear",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813043/Asset_3T_shirt_Design_lwunrl.jpg",
      alt: "Elegant T-shirt design with unique typography",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Asset_9T_shirt_Design_hruwti.jpg",
      alt: "Eye-catching T-shirt design with vibrant elements",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813048/Tshirts_42_dqvabo.png",
      alt: "Custom T-shirt design with detailed graphics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813048/Tshirts_38_pqfi7t.jpg",
      alt: "Premium T-shirt design for casual outings",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Asset_6T_shirt_Design_c0hyha.jpg",
      alt: "Artistic T-shirt design featuring bold creativity",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813047/Asset_7T_shirt_Design_fy6q1f.jpg",
      alt: "Modern T-shirt design with a trendy touch",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813044/Asset_5T_shirt_Design_ppzgyb.jpg",
      alt: "Dynamic T-shirt design for the adventurous spirit",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1734618658/Tshirts_40_d2pjdi.jpg",
      alt: "Dynamic T-shirt design for the adventurous spirit",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813043/Asset_2T_shirt_Design_qzhthx.jpg",
      alt: "Professional T-shirt design with sleek visuals",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813043/2258798_fwslbn.jpg",
      alt: "Unique T-shirt design combining simplicity and style",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813043/Asset_4T_shirt_Design_ckiio3.jpg",
      alt: "Versatile T-shirt design suitable for any occasion",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732813043/Asset_1T_shirt_Design_pc22en.jpg",
      alt: "Innovative T-shirt design with artistic flair",
    },
  ];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={tshirtSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-gray-700 mb-4">
              T-shirt Design
            </h1>
            <p className="text-lg text-[#525252]">
              Create custom T-shirt designs that showcase your brand or personal
              style with creative, eye-catching graphics.
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
                <p>Design concept or idea</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Preferred color scheme</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Logo or brand elements</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Any specific text or slogan</p>
              </li>
            </ul>
            <p className="mt-6 text-lg text-[#525252] italic text-center">
              * Custom packages can be created based on your specific needs and
              budget.
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
              "Unique T-shirt design concepts",
              "High-quality print-ready files",
              "Multiple design revisions",
              "Comfortable and stylish design",
              "Quick turnaround",
              "Vector files (AI, EPS, SVG)",
              "Reliable communication",
              "Post-launch support",
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

        {/* Explore Full Graphics Portfolio Section */}
        <section className="py-12 px-6 lg:px-0 bg-[#f9f8f6] text-center ">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Explore My Graphics Portfolio
          </h2>
          <p className="text-lg text-[#525252] mb-8 max-w-2xl mx-auto">
            Dive into my complete collection of designs, from logos to creative
            graphics, and explore the visual stories I've created for brands and
            individuals.
          </p>
          <Link
            to="/portfolio/graphics"
            target="_blank" // This ensures the link opens in a new tab
            className="inline-block bg-[#D9B592] text-white px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-[#343434]"
          >
            Explore Now
          </Link>
        </section>

        {/* Call to Action */}
        <div className="bg-[#D9B592] text-white py-12 text-center px-6 lg:px-0">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Design Your Custom T-shirt?
          </h2>
          <p className="mb-8 text-lg">
            Let's create an unforgettable design that speaks to your audience
            and showcases your unique style.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/appointment"
              className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
