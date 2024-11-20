import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function MySwiper({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow]}
      effect="coverflow"
      className="my-0 md:my-10"
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      coverflowEffect={{
        slideShadows: false, // Disable slide shadows
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full h-auto lg:h-[600px] object-cover object-center rounded-none md:rounded-3xl"
            src={slide.url}
            alt={slide.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MySwiper;
