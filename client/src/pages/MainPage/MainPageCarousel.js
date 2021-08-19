import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "./stylesCarousel.css";

SwiperCore.use([Pagination, Navigation]);

export default function MainPageCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src="https://img.gazeta.ru/files3/573/13318573/upload-19-pic905-895x505-54085.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.pravda.com/images/doc/c/a/cac0189-triple-lens-cameras.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kod.ru/content/images/2020/09/1594144188_raskryto-vot-kak-vyglyadit-novaya-linejka-apple-iphone-12.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://htstatic.imgsmail.ru/pic_original/207eacaec90347cd5ee97a82fbe418ef/1903206/" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ytimg.com/vi/xxIEBM7m7L8/maxresdefault.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://htstatic.imgsmail.ru/pic_image/a0098a5e293a37cf8b3cb3692f0ff1f6/840/472/1274450/" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kod.ru/content/images/2020/09/1-aG6ogH2sh-VZKC7MaRm3NA.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.gazeta.ru/files3/537/13252537/air-pic905-895x505-80332.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
