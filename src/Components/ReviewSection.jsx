import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    "name": "Flixe F.",
    "review": "Silver did a great job! He is very creative with a love of detail. Brought his own ideas into this project and gave me different variations where I could choose from, his kind of style and way to work are great. I definitely recommend him to you, who is reading this. Thanks!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734455123/1b_gxqopy.jpg",
    "country": "Germany"
  },
  {
    "name": "Emmer Leyl",
    "review": "Silver is exceptional with her designs as always! This is the third time that I've worked with him and he never fails to impress with his beautiful and professional artwork.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734454791/1_ylyhyg.jpg",
    "country": "UK"
  },
  {
    "name": "Treg Ammage",
    "review": "I keep coming back and I'm always excited at the timing, the deliverables, and logos. Thank you for always taking the time to understand what I need and make it look beautiful in a speedy amount of time. Thank you",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734455425/1c_zzvskq.jpg",
    "country": "USA"
  },
  {
    "name": "Sara R.",
    "review": "This is the third time I come back to Silver , he is very professional and his designs are fantastic. I highly recommend it.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456088/2_vycw1y.jpg",
    "country": "Spain"
  },
  {
    "name": "Teenapro",
    "review": "Always a pleasure to work with Silver - a professional service and exceptional work. Thank you",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456307/2-1_mleuod.jpg",
    "country": "UK"
  },
  {
    "name": "Dbodzin",
    "review": "Great experience working with this seller. He was quick to produce results and make changes as well. Highly recommended.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734456452/2-2_j51lyl.jpg",
    "country": "USA"
  },
  {
    "name": "Ala Chelle",
    "review": "I am thoroughly impressed with the final product! The entire process was smooth, quick and efficient. I would highly recommend for your first time as this was my first time and I was blown away.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734457826/2-3_snuxgv.jpg",
    "country": "United Kingdom"
  },
  {
    "name": "Isabella John",
    "review": "Having Silver take on such a project was a delight. He delivered results immediately with outstanding creativity. Excellent service and communication throughout the entire process. He provide above and beyond service as he promised. I would highly recommend him.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458053/2a_jz3ikp.jpg",
    "country": "United Kingdom"
  },
  {
    "name": "Lecinda",
    "review": "The best of the best! Communication from start to end was fast and efficient. Extremely professional and very patient. The design was exactly what I wanted. Thank you!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458220/2b_ocvajp.jpg",
    "country": "Australia"
  },
  {
    "name": "Katy B.",
    "review": "Absolutely wonderful experience- I have no idea how he has the energy to be so on top of ALL communications! We went back and forth with designs, fonts, you name it. He provides exceptional service and delivers an exceptional product.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458478/2c_rsisqz.jpg",
    "country": "USA"
  },
  {
    "name": "Diana Varas",
    "review": "Silver was very attentive and fully complied my request. I would work with him again without hesitation. Hire him and look no further! Excellent.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734458678/2d_fmrl2e.jpg",
    "country": "Ecuador"
  },
  {
    "name": "Charles Simon",
    "review": "As usual, Silver was fantastic in all aspects. Quality of work is impressive, very pro-active and quick to reply, and always seeks the best path to a successful project. I can't recommend her enough!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459061/82_cktny1.jpg",
    "country": "Hong Kong"
  },
  {
    "name": "Miss Dawn T.",
    "review": "Always a pleasure working with this seller. So helpful. Repeat custom from me all the time. Highly recommend.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459095/30_awsm0g.jpg",
    "country": "UK"
  },
  {
    "name": "Mk Amelia",
    "review": "It was amazing working with Silver! That was my second project designed by Silver. Understood my vision and my direction and she exceeded my expectations. Great communication! I would definitely recommend Silver.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459159/11_r6fqaz.jpg",
    "country": "USA"
  },
  {
    "name": "Edward K.",
    "review": "Silver provided quality design - very happy with the outcome. Communicates in a pleasant manner, revisions attended to, work delivered in timely way.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459201/20_fpop94.jpg",
    "country": "Australia"
  },
  {
    "name": "Jordan Knibbe",
    "review": "Working again with Silver has been a great experience. Very Talented, Highly recommend!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459243/17_tpm4nr.jpg",
    "country": "USA"
  },
  {
    "name": "Rox Donovan",
    "review": "Totally amazing to work with. If you’re on fence, take the plunge. Best decision I’ve made for my business in a while.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459273/31_xusmqz.jpg",
    "country": "USA"
  },
  {
    "name": "Jhonson M.",
    "review": "Silver has done multiple projects with us and always does a great job. Very responsive and always able to work with us to help us find our vision. We always appreciate working with him and plan to do more work in the future.",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459312/53_onkfkf.jpg",
    "country": "USA"
  },
  {
    "name": "Rene Wang",
    "review": "The BEST designer I've worked with. Silver is professional with a great sense of style. He understands my needs and instructions and can create designs in the look and style I'm looking for. He is patient with all of my revision requests. He's a great communicator. I would totally work with him again!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459474/86_fjzkni.jpg",
    "country": "Canada"
  },
  {
    "name": "Malcolm William",
    "review": "Excellent service! I purchased a new package for a different need immediately because of how well this was executed!",
    "avatar": "https://res.cloudinary.com/dntx46fvh/image/upload/v1734459541/28_stobry.jpg",
    "country": "USA"
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
              Hear from our happy clients about their experiences with my services.
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
              <SwiperSlide key={index} className="flex flex-col items-center p-14 lg:p-10 bg-[#444343] rounded-xl text-center">
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  <img
                    src={review.avatar}
                    alt={`${review.name} Avatar`}
                    className="w-16 h-16 rounded-full border-2 border-[#D9B592]"
                  />
                  <div className="text-center">
                    {/* Name */}
                    <h3 className="text-2xl text-[#D9B592] font-medium">{review.name}</h3>
                    {/* Country */}
                    <p className="text-sm text-[#D9B592] text-left">{review.country}</p>
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
