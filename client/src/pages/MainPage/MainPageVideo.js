import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "./stylesVideo.css";
import videoApple from "../../assets/Video/iphone12.mp4";

SwiperCore.use([Pagination, Navigation]);

export default function MainPageVideo() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <video className="mainVideo" loop autoPlay muted>
            <source src={videoApple} />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gazeta.ru/files3/573/13318573/upload-19-pic905-895x505-54085.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
