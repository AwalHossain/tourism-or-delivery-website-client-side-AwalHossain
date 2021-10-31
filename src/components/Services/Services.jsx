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
        <div>
            <h2 className="my-10 text-4xl">
                Our services
            </h2>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <Row xs={1} md={2} lg={3} className="g-4"> */}
                {
                    services.map(data => <Service
                    key={data._id}
                    service={data}
                    ></Service>)
                }
            {/* </Row> */}
        </div>
        </div>
    );
};

export default Services;