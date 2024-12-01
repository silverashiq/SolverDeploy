import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const SocialPage = () => {
  const socialSlides = [

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_8_uhu853.jpg",
      alt: "Dynamic social media design to boost online presence",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813736/Social_Media_Design_xylgzf.jpg",
      alt: "Professional social media design tailored for your needs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813476/Social_Media_Design_2_bzp0gd.jpg",
      alt: "Creative and stylish social media design templates",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_10_vdbhmm.jpg",
      alt: "Sophisticated social media design for brand elevation",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_9_nrg0ec.jpg",
      alt: "Trendy social media design perfect for promotions",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813478/Social_Media_Design_6_hzvig6.jpg",
      alt: "High-quality social media graphics for better engagement",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813477/Social_Media_Design_4_a9mumv.jpg",
      alt: "Modern social media design for impactful storytelling",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813478/Social_Media_Design_5_zaeta2.jpg",
      alt: "Custom social media design with vibrant aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813479/Social_Media_Design_7_q8i4t7.jpg",
      alt: "Engaging social media design for impactful branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813476/Social_Media_Design_3_azlv4k.jpg",
      alt: "Eye-catching social media design for brand promotion",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813475/Social_Media_Design_1_nij2g5.png",
      alt: "Unique social media design for standout posts",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813377/Social_Media_Design_1_lugat9.jpg",
      alt: "Elegant social media design for professional branding",
    },
    
  ];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={socialSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-[#D9B592] mb-4">
              Social Media Design
            </h1>
            <p className="text-lg text-[#525252]">
              Create a strong online presence with custom, eye-catching social media designs tailored to your brand.
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
                <p>Preferred social media platforms</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Logo and branding assets</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Design preferences (e.g., color scheme, layout)</p>
              </li>
            </ul>
            <p className="mt-6 text-lg text-[#525252] italic text-center">
              * Custom packages can be created based on your specific needs and budget.
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
              "Custom social media post designs",
              "Platform-specific optimization",
              "Eye-catching graphics",
              "Quick turnaround",
              "All relevant design files",
              "Social media optimized content",
              "Unlimited revisions",
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

        {/* Call to Action */}
        <div className="bg-[#D9B592] text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make Your Social Media Stand Out?
          </h2>
          <p className="mb-8 text-lg">
            Let's create designs that boost your engagement and grow your brand.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-opacity-90 transition">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
