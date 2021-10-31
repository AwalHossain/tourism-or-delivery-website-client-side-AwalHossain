import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';
import './PendingOrder.css'

const PendingOrder = (props) => {
    const {name, desc, status, img, _id} = props.order;
    //useState 
    const [control, setControl] = useState(false)
    console.log(props.order);
    //handle Delete
    const handleDelete =(id)=>{
        const confirm = window.confirm("Do You really want to delete the item?")
        if(confirm){
            trackPromise(
                fetch(`https://polar-tor-84735.herokuapp.com/deletOrder/${id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(res=> res.json())
                .then(data =>{
                    if(data.deletedCount){
                        window.location.reload(false);
                        alert("Successfully deleted")
                        console.log(data);
                    }
                    else{
                        setControl(false)
                    }
                })
            )
        }
    }

    return (
        <Col className="my-5">
        <Card className="box">
            <div className="img-box">
            <Card.Img className="head" variant="top" src={img} />
            </div>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {desc.slice(0,100)}...
            </Card.Text>
                <div className="d-flex justify-content-between ">
                <div className="check-btn">
                    {
                        status === 'approved'?<button className="bg-green-400 text-white " >{status}</button> : <button className="bg-yellow-400 text-white " >{status}</button>
                    }
                
                </div>
                 <button  className="check-btn bg-red-600 text-white "
                  onClick={()=>handleDelete(_id)}
                 >Delete</button></div>
            </Card.Body>
        </Card>
     </Col>

    );
};

export default PendingOrder;