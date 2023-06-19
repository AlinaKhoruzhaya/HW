import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Home_bg_first from '../img/Home/home__bg.jpg';
import Home_bg_second from '../img/Home/home__bg_second.jpg';


function MainSliderBg() {
    {
        return (
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={Home_bg_first} alt="bg" /></SwiperSlide>
                <SwiperSlide><img src={Home_bg_second} alt="bg" /></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        );
    };
}
export default MainSliderBg;
