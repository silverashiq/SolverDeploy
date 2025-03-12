import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const reviews = [
  {
    name: "Flixe F.",
    review:
      "The team did a fantastic job! They are highly creative with great attention to detail. They brought fresh ideas into this project and provided multiple variations to choose from. Their expertise and workflow are outstanding. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734455123/1b_gxqopy.jpg",
    country: "Germany",
  },
  {
    name: "Emmer Leyl",
    review:
      "Exceptional work as always! This is my third project with them, and they continue to impress with their beautiful, professional designs and seamless execution.",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734454791/1_ylyhyg.jpg",
    country: "UK",
  },
  {
    name: "Treg Ammage",
    review:
      "I keep coming back, and every time, they exceed my expectations. The timing, the deliverables, and the attention to detail are always perfect. They truly understand my needs and turn them into something beautiful in record time!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734455425/1c_zzvskq.jpg",
    country: "USA",
  },
  {
    name: "Sara R.",
    review:
      "This is the third time I’ve worked with them, and they always deliver fantastic results. Very professional and easy to work with. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456088/2_vycw1y.jpg",
    country: "Spain",
  },
  {
    name: "Teenapro",
    review:
      "Always a pleasure to work with – professional service and exceptional work. Quick, efficient, and very easy to communicate with. Thank you!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456307/2-1_mleuod.jpg",
    country: "UK",
  },
  {
    name: "Dbodzin",
    review:
      "Great experience! The team was quick to deliver and very accommodating with changes. Highly recommended for quality work and professionalism.",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456452/2-2_j51lyl.jpg",
    country: "USA",
  },
  {
    name: "Ala Chelle",
    review:
      "I am thoroughly impressed with the final product! The entire process was smooth, quick, and efficient. As a first-time customer, I wasn’t sure what to expect, but they exceeded my expectations. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734457826/2-3_snuxgv.jpg",
    country: "United Kingdom",
  },
  {
    name: "Isabella John",
    review:
      "An absolute delight to work with. The results were delivered quickly and with outstanding creativity. Communication was great throughout the entire process, and they went above and beyond to ensure everything was perfect. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458053/2a_jz3ikp.jpg",
    country: "United Kingdom",
  },
  {
    name: "Lecinda",
    review:
      "The best of the best! Fast and efficient communication, extremely professional, and very patient. The design was exactly what I envisioned. Thank you!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458220/2b_ocvajp.jpg",
    country: "Australia",
  },
  {
    name: "Katy B.",
    review:
      "Absolutely wonderful experience! Super responsive, incredibly patient, and truly cares about delivering the best results. I went back and forth with different designs, and they always took the time to perfect every detail. Exceptional service!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458478/2c_rsisqz.jpg",
    country: "USA",
  },
  {
    name: "Diana Varas",
    review:
      "Very attentive and completely delivered on my request. I would work with them again in a heartbeat. If you're looking for quality and reliability, look no further!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458678/2d_fmrl2e.jpg",
    country: "Ecuador",
  },
  {
    name: "Charles Simon",
    review:
      "Fantastic in all aspects. The quality of work is impressive, very proactive, and quick to reply. They always seek the best way to ensure a successful project. Highly recommended!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459061/82_cktny1.jpg",
    country: "Hong Kong",
  },
  {
    name: "Miss Dawn T.",
    review:
      "Always a pleasure working with them. Super helpful and always delivers top-quality work. I keep coming back for a reason. Highly recommend!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459095/30_awsm0g.jpg",
    country: "UK",
  },
  {
    name: "Mk Amelia",
    review:
      "Amazing experience! This was my second project with them, and they truly understood my vision. Exceeded my expectations once again. Great communication and top-notch design!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459159/11_r6fqaz.jpg",
    country: "USA",
  },
  {
    name: "Edward K.",
    review:
      "Top-quality design work! Everything was handled professionally, communication was smooth, and the project was delivered on time. Very happy with the outcome!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459201/20_fpop94.jpg",
    country: "Australia",
  },
  {
    name: "Jordan Knibbe",
    review:
      "Working with them again has been a great experience. Incredibly talented and highly recommended!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459243/17_tpm4nr.jpg",
    country: "USA",
  },
  {
    name: "Rox Donovan",
    review:
      "Absolutely amazing to work with. If you're unsure, take the leap—you won’t regret it. Best decision I’ve made for my business in a long time!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459273/31_xusmqz.jpg",
    country: "USA",
  },
  {
    name: "Jhonson M.",
    review:
      "We've worked on multiple projects together, and they always do a fantastic job. Very responsive and always willing to make adjustments to fit our vision. Looking forward to future collaborations!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459312/53_onkfkf.jpg",
    country: "USA",
  },
  {
    name: "Rene Wang",
    review:
      "One of the best teams I've worked with! They have an amazing sense of style and truly understand my vision. Very patient with revisions and a pleasure to work with. Highly recommended!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459474/86_fjzkni.jpg",
    country: "Canada",
  },
  {
    name: "Malcolm William",
    review:
      "Excellent service! The execution was flawless, and I immediately purchased another package because of how well they handled everything!",
    avatar:
      "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459541/28_stobry.jpg",
    country: "USA",
  },
];


const ReviewSection = () => {
  return (
    <section id="testimonials" className="bg-[#5c5b5b] py-10 lg:py-24">
      <div className="container mx-auto px-4 lg:px-20 h-full flex items-center justify-center">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-gray-100">
              Testimonials
            </h2>
            <div className="flex justify-center">
              <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]"></span>
            </div>
            <p className="text-gray-100 text-lg sm:text-xl font-light mb-14">
              Hear from our happy clients about their experiences with our
              services.
            </p>
          </div>

          {/* Swiper container */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} // Enable navigation arrows
            loop={true}
            autoplay={{ delay: 15000 }}
            modules={[Navigation, Autoplay]} // Add necessary modules
            className="swiper-container"
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center p-14 lg:p-10 bg-[#444343] rounded-xl text-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  <img
                    src={review.avatar}
                    alt={`${review.name} Avatar`}
                    className="w-16 h-16 rounded-full border-2 border-[#D9B592]"
                  />
                  <div className="text-center">
                    {/* Name */}
                    <h3 className="text-2xl text-[#D9B592] font-medium">
                      {review.name}
                    </h3>
                    {/* Country */}
                    <p className="text-sm text-[#D9B592] text-left">
                      {review.country}
                    </p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-lg text-white italic my-4 max-w-3xl mx-auto">
                  {review.review}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
