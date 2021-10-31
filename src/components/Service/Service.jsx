import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'
const Service = (props) => {
    const {name, desc, price, image,_id}  = props.service
    return (
        <div className=" flex items-center flex-col sm:flex-row  md:flex-col px-2 shadow-xl transition duration-200 ease-out mb-5 rounded-lg">

         <div className=" card-imgbox relative  md:h-64  md:w-full flex-shrink-0 px-4">
            <img src={image} className="md:h-64 " alt="" />
         </div>
         <div className="flex flex-col flex-grow-pl-5">
            <div className="flex justify-end">
                <HeartIcon className="h-7 cursor-pointer"></HeartIcon>
            </div>
            <h5 className="text-black text-2xl">{name}</h5>
            <div className="border-b w-10 pt-2"></div>
            <p className="pt-2 text-sm text-gray-500 flex-grow">{desc.slice(0,100)}...</p>
            <div className="flex items-center  justify-between ">
            <div >
                <p>
                <Link className="no-underline" to={`order/${_id}`}>
                     <button className="bg-green-400 text-white text-xs md:text-xl rounded-lg border-none ">Check Avaibility</button>
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-lg font-semibold lg:text-2xl">${price}/night</p>
                <div className="">

                </div>
            </div>
            </div>
         </div>
        </div>
    );
};

export default Service;<h2>This is Services</h2>