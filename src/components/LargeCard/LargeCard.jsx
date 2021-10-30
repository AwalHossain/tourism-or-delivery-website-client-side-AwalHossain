import React from 'react';
import './LargeCard.css'
const LargeCard = () => {
    return (
        <div className="relative py-16 ">
            <div className="relative min-w-[300px]">
                <img className="object-cover footer-img rounded-2xl" src="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440" alt="" />
            </div>
            <div className="absolute top-16  md:top-32 left-2 md:left-12">
                <h3 className="text-3xl md:w-full w-64">The Gretest Outdoors</h3>
                <p className="">Wishlist Created by dream place</p>
                <button className="bg-gray-900 text-white rounded-md">Get Inspired</button>
            </div>
        </div>
    );
};

export default LargeCard;