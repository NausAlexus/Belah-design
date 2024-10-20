import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";
import { SLIDER } from "../../../../data/SLIDER";

const Projects_Swiper = () => {
  return (
    <>
      <Swiper
        // slidesPerView={2.1}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
        }}
      >
        {SLIDER.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title1} />
            <h2>{slide.title1}</h2>
            <h3>{slide.title2}</h3>
            <a target="blank" href={slide.src} className="btn-next">More</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects_Swiper;
