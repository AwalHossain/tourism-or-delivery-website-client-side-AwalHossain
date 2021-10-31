import React from 'react';
import { Link } from 'react-router-dom';
import './LargeCard.css'
const LargeCard = () => {
    return (
        // This is a beautiful Large card
        <div className="max-w-7xl mx-auto px-8 sm:px-16">

        <div className="relative py-16 ">
            <div className="relative min-w-[300px]">
                <img className="object-cover footer-img rounded-2xl" src="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440" alt="" />
            </div>
            <div className="absolute top-16  md:top-32 left-2 md:left-12">
                <h3 className="text-3xl md:w-full w-64">The Gretest Outdoors</h3>
                <p className="">Wishlist Created by dream place</p>
                <Link><p className="bg-gray-900 w-44 px-3  text-white rounded-md">Get Inspired</p></Link>
            </div>
        </div>
        </div>
    );
};

export default LargeCard;