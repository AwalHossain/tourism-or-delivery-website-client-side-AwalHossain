import React from 'react';
import { Link } from 'react-router-dom';
import './SmallCard.css'
const SmallCard = ({img,location, distance}) => {
    return (
        // Small card
        <div>
            <div className="flex space-x-4 mt-4 rounded-xl cursor-pointer hover:bg-gray-100 scale transition transform  duration-100 ease-out">
            {/* left */}
                <div className="h-16 w-16 relative">
                    <img className="rounded-lg" src={img} alt="" />
                </div>
                {/* right */}
                <div>
                    <p className="mb-0 font-semibold">{location}</p>
                    <p className="">{distance}</p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;