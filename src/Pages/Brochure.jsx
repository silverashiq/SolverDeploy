import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const Brochure = () => {
  const printDesignSlides = [
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288625/Print_Media_Design_Brochure_Flyer_32_ojuiet.jpg",
      alt: "Sophisticated design with professional aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733047776/Tri_MOCKUP_bt2dmq.jpg",
      alt: "Sophisticated design with professional aesthetics",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733047775/BC_3d_Mockup_stt3y6.jpg",
      alt: "Sophisticated design with professional aesthetics",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
      alt: "Creative and professional print media design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_43_v2riwc.jpg",
      alt: "Eye-catching flyers and brochures designed to elevate your business",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288517/Print_Media_Design_Brochure_Flyer_4_rrpnuu.png",
      alt: "High-quality print media designs for your business",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_41_h4x7ol.jpg",
      alt: "High-quality print media designs for your business",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288634/Print_Media_Design_Brochure_Flyer_40_crjamo.jpg",
      alt: "Custom print media designs that represent your brand",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_36_gx8ij9.jpg",
      alt: "Premium print media designs tailored to your needs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
      alt: "Attention-grabbing designs to promote your business",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_38_ifljvv.jpg",
      alt: "Creative print media solutions for your brand",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288632/Print_Media_Design_Brochure_Flyer_39_d5t9iq.jpg",
      alt: "Elegant and stylish print media designs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_31_oht4v9.jpg",
      alt: "Professional print designs that captivate",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_27_xnefzz.jpg",
      alt: "Bespoke print designs tailored for your brand",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288626/Print_Media_Design_Brochure_Flyer_33_rjkosn.jpg",
      alt: "Striking print media designs for any occasion",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288518/Print_Media_Design_Brochure_Flyer_3_i0wjvy.jpg",
      alt: "Striking print media designs for any occasion",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_30_yqs2rt.jpg",
      alt: "Dynamic and modern print media designs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_28_d76ocj.jpg",
      alt: "Versatile designs to suit your business needs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288618/Print_Media_Design_Brochure_Flyer_29_deukxg.jpg",
      alt: "High-quality print materials that leave an impression",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_26_h6urci.jpg",
      alt: "Customizable designs for any industry",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_23_n8htpa.jpg",
      alt: "Creative solutions for your print media needs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288614/Print_Media_Design_Brochure_Flyer_25_xqtgkn.jpg",
      alt: "Stylish designs that communicate effectively",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_22_w7ouua.jpg",
      alt: "Elegant print media designs to captivate your audience",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_21_cdfdt7.jpg",
      alt: "High-impact print media for all your needs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_20_kze9u2.jpg",
      alt: "Creative print media solutions for branding",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_19_b2ljqc.jpg",
      alt: "Exceptional print designs for your business",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288609/Print_Media_Design_Brochure_Flyer_9_vu9j8q.jpg",
      alt: "Custom designs that speak for your brand",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288608/Print_Media_Design_Brochure_Flyer_12_mcfeaj.jpg",
      alt: "Professional and clean print media designs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288607/Print_Media_Design_Brochure_Flyer_16_pdmztk.jpg",
      alt: "Tailored print media designs for your goals",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288605/Print_Media_Design_Brochure_Flyer_11_c5th8b.jpg",
      alt: "Modern and impactful print media designs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288576/Print_Media_Design_Brochure_Flyer_14_ojzr2l.jpg",
      alt: "Beautiful print media solutions for your brand",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288565/Print_Media_Design_Brochure_Flyer_10_ux5kjm.jpg",
      alt: "Creative and functional print media designs",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288563/Print_Media_Design_Brochure_Flyer_7_a6ax56.jpg",
      alt: "Innovative print media designs to stand out",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288533/Print_Media_Design_Brochure_Flyer_2_mbp3rf.jpg",
      alt: "Eye-catching designs for print media materials",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732288534/Print_Media_Design_Brochure_Flyer_8_mkojye.jpg",
      alt: "Efficient and creative print designs for branding",
    },
  ];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={printDesignSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-gray-700 mb-4">
              Print Media Design
            </h1>
            <p className="text-lg text-[#525252]">
              Whether you're looking for a brochure, banner, poster, or any
              other print media, I provide custom design services that help you
              stand out. From business cards to large format prints, I can
              create designs that align with your brand and goals.
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
                <p>Your company or business logo (can create one if needed)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Contact details (phone number, website, address, etc.)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Design preferences (colors, style, layout)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Any contents, text, images, or branding elements</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Budget details (if any)</p>
              </li>
            </ul>
            <p className="mt-6 text-lg text-[#525252] italic text-center">
              *The final cost will depend on the specific design, number of
              items, and complexity. Custom packages can be created based on
              your specific budget.
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
              "Professional and creative designs tailored to your brand",
              "High-resolution print-ready files",
              "Editable source files for future revisions",
              "Unlimited revisions until you're satisfied",
              "3d Mockup image",
              "After-sales support",
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

        {/* Print Media Services */}
        <section className="text-center mb-16 px-6 lg:px-32">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Types of Print Media We Design
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Flyers & Posters",
              "Brochures & Catalogs",
              "Office Stationeries",
              "Banners & Signage",
              "Book covers",
              "Invitation Cards",
              "Menu Designs",
              "Event & Conference Materials",
              "Custom designs",
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

        {/* Explore Full Graphics Portfolio Section */}
        <section className="py-12 px-6 lg:px-0 bg-[#f9f8f6] text-center ">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Explore Our Graphics Portfolio
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
            Ready to Create Stunning Print Media for Your Business?
          </h2>
          <p className="mb-8 text-lg">
            Let’s work together to bring your ideas to life with high-quality
            print media designs that leave a lasting impression.
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

export default Brochure;
