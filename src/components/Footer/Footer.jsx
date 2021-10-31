import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            {/* A typical footer */}
            <div className="grid grid-cols-1 md:grid-cols-4 flex-grow px-28 bg-gray-100 py-14 gap-3 zendex">
                <div className="text-xs text-gray-800">
                    <h5 className="text-lg text-black" >About</h5>
                    <p >How Dream Place works?</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Dream Place Pluse</p>
                    <p>Dream Place Luxe</p>
                </div>
                <div className="text-xs text-gray-800">
                    <h5 className="text-lg text-black">Accesibility</h5>
                    <p >How </p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Dream Place Pluse</p>
                    <p>Dream Place Luxe</p>
                </div>
                <div className="text-xs text-gray-800">
                    <h5 className="text-lg text-black">Contact</h5>
                    <p >How Dream Place works?</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Dream Place Pluse</p>
                    <p>Dream Place Luxe</p>
                </div>
                <div className="text-xs text-gray-800">
                    <h5 className="text-lg text-black">Help center</h5>
                    <p >How Dream Place works?</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Dream Place Pluse</p>
                    <p>Dream Place Luxe</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;