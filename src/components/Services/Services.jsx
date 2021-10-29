import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(data => <Service
                    key={data._id}
                    service={data}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;