import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "./gallary.css";
import { IonIcon } from "@ionic/react";

import slide_image_1 from "./images/img_1.jpg";
import slide_image_2 from "./images/img_2.jpg";
import slide_image_3 from "./images/img_3.jpg";
import slide_image_4 from "./images/img_4.jpg";
import slide_image_5 from "./images/img_5.jpg";
import slide_image_6 from "./images/img_6.jpg";
import slide_image_7 from "./images/img_7.jpg";

const Gallery: React.FC = () => {
  return (
    <div className="container">
      <h1 className="heading mb-12 font-bold">Our Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {/* Adding the images */}
        <SwiperSlide>
          <img src={slide_image_1.src} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2.src} alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3.src} alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4.src} alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5.src} alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6.src} alt="Image 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7.src} alt="Image 7" />
        </SwiperSlide>

        {/* Slider controls */}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
