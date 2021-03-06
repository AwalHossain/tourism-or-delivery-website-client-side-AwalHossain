import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        trackPromise(
            fetch('https://polar-tor-84735.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        )
    },[])
    
    return (
        //Fetching data and then map the data to get every single one of them
        <div>
            <div className="pt-6">
            <h2 className="text-4xl font-semibold pb-5"> Our Services</h2>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(data => <Service
                    key={data._id}
                    service={data}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;