import React from 'react';
import  { useRef, useState } from "react";
import './Carousel.css'
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; import "swiper/swiper-bundle.min.css";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Link } from 'react-router-dom';


SwiperCore.use([Pagination]);
const Carousel = () => {
    return (
        // This is a travel image gallary carousel
        <div className="hidden lg:block my-10">
            <h2 className="text-4xl mb-16 font-bold">Travel Gallary</h2>
             <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
            <div className="album-card ">
            <div className="imgbox">
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/tour-4-featured-img.jpg" alt="img"/>
            </div>
            <div className="content mx-auto text-center">
                <h5 className="title text-4xl font-extrabold">Visit Japan</h5>
                <p className="para"> learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>
            </div>
            </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="album-card ">
            <div className="imgbox">
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/tour-20-featured-img.jpg" alt="" />
            </div>
            <div className="content text-center">
                <h5 className="title text-4xl font-extrabold">Vietnam Tour</h5>
                <p className="para"> learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

            </div>
            </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="album-card ">
            <div className="imgbox">
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/tour-17-featured-img.jpg" alt="" />
            </div>
            <div className="content text-center">
                <h5 className="title text-4xl font-extrabold">Great Africa Tour</h5>
                <p className="para "> learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>
            </div>
            </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div>
            <div className="album-card ">
            <div className="imgbox">
            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/tour-18-featured-img.jpg" alt="" />
            </div>
            <div className="content text-center">
                <h5 className="title text-4xl font-extrabold">Cold Alaska Tour</h5>
                <p className="para"> learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

            </div>
            </div>
            </div>

        </SwiperSlide>

      </Swiper>
    </>
        </div>
    );
};

export default Carousel;