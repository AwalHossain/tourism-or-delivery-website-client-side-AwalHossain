import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';
import UseAuth from '../../Hooks/UseAuth';
import PendingOrder from '../PendingOrder/PendingOrder';
import './MyOrder.css'
const MyOrder = () => {
    const {user} = UseAuth();
    //UseState
    const [list, setList] = useState([])
    useEffect(()=>{
        trackPromise(
            fetch(`https://polar-tor-84735.herokuapp.com/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => setList(data))
        )
    },[user?.email])
    console.log(list);
    return (
        <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4">
            {
              list?.length !== 0 ?  list.map(info => <PendingOrder key={info._id} order={info}></PendingOrder>) : <h2 className="text-center mx-auto py-16">No order avialable</h2>
            }
            </Row>


        </div>
    );
};

export default MyOrder;