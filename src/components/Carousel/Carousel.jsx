import React from 'react';
import  { useRef, useState } from "react";
import './Carousel.css'
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/swiper.scss';;
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; import "swiper/swiper-bundle.min.css";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Pagination]);
const Carousel = () => {
    return (
        <div className="hidden lg:block">
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
            <div className="content">
                <h5 className="title">China Tour</h5>
                <p className="para">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

                <Link to="/services">
                <button className="btn btn-primary my-3">Added
                </button>
                </Link>
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
            <div className="content">
                <h5 className="title">China Tour</h5>
                <p className="para">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

                <Link to="/services">
                <button className="btn btn-primary my-3">Added
                </button>
                </Link>
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
            <div className="content">
                <h5 className="title">China Tour</h5>
                <p className="para">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

                <Link to="/services">
                <button className="btn btn-primary my-3">Added
                </button>
                </Link>
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
            <div className="content">
                <h5 className="title">China Tour</h5>
                <p className="para">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now..</p>

                <Link to="/services">
                <button className="btn btn-primary my-3">Added
                </button>
                </Link>
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