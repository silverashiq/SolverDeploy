import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const Packaging = () => {
  const packagingSlides = [
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813524/76421_jcmebz.jpg",
      alt: "Sophisticated design with professional aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813523/130_a1k8tb.jpg",
      alt: "Minimalist design focused on sleek presentation",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813528/Leather_Bag_2000x1300px_Free_PSD_Mockup_by_MD15_rbqnpi.jpg",
      alt: "Premium leather bag mockup for branding visualization",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813522/44_emhhep.jpg",
      alt: "Elegant design showcasing minimalist aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813525/Flyer_24_x77kzo.jpg",
      alt: "Vibrant flyer design ideal for promotions",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813527/Flyer_5_rmrgg5.jpg",
      alt: "Creative flyer design for marketing campaigns",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732814047/wine_gnkli8.jpg",
      alt: "Elegant wine label design for sophisticated branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/t_pot/q_auto/v1732813534/STRAWBERRY_MockUp_ttsrer.png",
      alt: "Strawberry-themed product mockup for fresh branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813534/Vintage_Label_Tag_MockUp_jtlice.jpg",
      alt: "Vintage label tag mockup with classic aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/tyhtyr_rdgkpe.jpg",
      alt: "Modern design with a bold visual approach",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Social_Design_23_fmveyz.jpg",
      alt: "Dynamic social media design for impactful engagement",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Window_mockup_njesog.jpg",
      alt: "Realistic window mockup for brand display",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Shop_Facade_Logo_MockUp_2_iuvjrk.jpg",
      alt: "Shop facade logo mockup for outdoor branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813531/Reality_1_mockup_uizrzk.jpg",
      alt: "Stylish mockup with a realistic visual appeal",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813530/seal_c_y7rq7p.jpg",
      alt: "Seal design mockup for official branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813527/Logo_55_ybhzzh.jpg",
      alt: "Logo mockup showcasing minimalist elegance",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813526/Flyer_25_fuqpi7.jpg",
      alt: "Engaging flyer design with modern elements",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813523/65900_ipe8w8.jpg",
      alt: "Creative composition with eye-catching visuals",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813526/Flyer_27_b9zdet.jpg",
      alt: "Stylish flyer design for impactful marketing",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813525/183_jhuvdl.jpg",
      alt: "Modern layout with a bold visual statement",
    },


    
  ];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={packagingSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-[#D9B592] mb-4">
              Packaging Design
            </h1>
            <p className="text-lg text-[#525252]">
              Enhance your product's appeal with custom packaging designs that leave a lasting impression on your customers.
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
                <p>Product details and dimensions</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Branding and logo assets</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Target audience and market</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Preferred design style (e.g., minimalist, luxury, playful)</p>
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
              "Custom product packaging designs",
              "High-quality mockups",
              "Print-ready files (AI, PDF, JPG, PNG)",
              "Quick turnaround",
              "Unlimited revisions",
              "Packaging designed for consumer engagement",
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
            Ready to Package Your Product in Style?
          </h2>
          <p className="mb-8 text-lg">
            Let's create a packaging design that reflects your brand and captivates your customers.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-opacity-90 transition">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
