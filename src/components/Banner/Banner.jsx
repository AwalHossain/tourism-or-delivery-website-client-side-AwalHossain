import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    // Here i use an airbnb image for banner
    return (
        <div  className=" banner-imgbox relative  h-[300px] sm:h-[400px] log:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <div>
                <img className="banner-img object-cover" src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg" alt="" />
            </div>
            <div className="absolute top-1/2 w-full text-center sm:text-lg">
                <p>Not sure Where to go?Perfect</p>
                
                <Link to="/services"> <p className="text-purple-500 w-52 bg-white mx-auto px-10 py-3 shadow-md rounded-full font-bold my-3 border-none hover:shadow-xl transition duration-150">I'm Flexible</p></Link>
            </div>
        </div>
    );
};

export default Banner;