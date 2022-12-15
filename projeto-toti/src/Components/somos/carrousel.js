import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./som.css";


import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/1535775/pexels-photo-1535775.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3116311/pexels-photo-3116311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3290058/pexels-photo-3290058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/7798579/pexels-photo-7798579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3289849/pexels-photo-3289849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3751296/pexels-photo-3751296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/2219217/pexels-photo-2219217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/13313751/pexels-photo-13313751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/14727305/pexels-photo-14727305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
