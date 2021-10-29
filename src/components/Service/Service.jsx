import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name, desc, price, image,_id} = props.service
    return (
        <div>
          <Col className="container my-5">
            <Card className="box">
                <div className="img-box">
                <Card.Img className="head-img" variant="top" src={image} />
                </div>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <div className="check-btn">
                    <Link to={`order/${_id}`}>
                    <button >Check Avaibility</button>
                    </Link>
                </div>
                </Card.Body>
            </Card>
         </Col>
        </div>
    );
};

export default Service;<h2>This is Services</h2>