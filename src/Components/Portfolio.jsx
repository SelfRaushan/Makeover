import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PortfolioSlider = ({ images }) => (
  <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img src={img} alt={`Portfolio ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default PortfolioSlider;
