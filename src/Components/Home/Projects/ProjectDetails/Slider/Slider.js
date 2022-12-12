import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../../../styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Slider = ({images}) => {
// const allImges=images[0];
console.log(images)
  
    return (
        <div>
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
       {
        images?.map(imgs => <SwiperSlide>
          <img src={imgs} alt="" className="h-full shadow-xl shadow-slate-500"/>
        </SwiperSlide>)
       }
       
      </Swiper>
    </>  
        </div>
    );
};

export default Slider;

