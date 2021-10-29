import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import PendingOrder from '../PendingOrder/PendingOrder';
import './MyOrder.css'
const MyOrder = () => {
    const {user} = UseAuth();
    //UseState
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch(`https://polar-tor-84735.herokuapp.com/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => setList(data))
    },[user?.email])
    console.log(list);
    return (
        <div className="container">
            <h2>I am from Myorder</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                list.map(info => <PendingOrder key={info._id} order={info}></PendingOrder>)
            }
            </Row>


        </div>
    );
};

export default MyOrder;