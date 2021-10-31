import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';

const ManageOrder= () => {
  // useState
    const [services , setServices] = useState([])
    const [control, setControl] = useState(false)
     useEffect(()=>{
      trackPromise(
        fetch('https://polar-tor-84735.herokuapp.com/myOrder')
        .then(res=> res.json())
        .then(data =>{
          console.log(data);
          setServices(data)
        })
      )
     },[control])
     //Delete method
     const handleDelete=(id)=>{
      const confirm = window.confirm("Do You really want to delete the item?")
      if(confirm){
        trackPromise(
          fetch(`https://polar-tor-84735.herokuapp.com/removeOrder/${id}`,{
            method: 'DELETE',
            headers:{
              'content-type':'application/json'
            }
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount){
              alert("Deleted")
              setControl(!control)
            }
            else{
              setControl(false)
            }
          })
        )
      }

     }

    //Update method
    const handleUpdate=(id)=>{
      const updateStatus = {
        status:'approved'
      };
      trackPromise(
        fetch(`https://polar-tor-84735.herokuapp.com/updateStatus/${id}`,{
          method: 'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
          // window.location.reload(false);
          setControl(!control)
          alert("your order approved")
        })
      )
    }
    //if device width less than 668 than you cannot see this components
    if(window.outerWidth < 668){
      return <h1 className="px-4 flex py-4">Please, use larger screen to show manage order and if you do Please refresh the page</h1>
    }

    return (
        <div>
          {/* Mange order table */}
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Title</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Status Update</th>
            <th>Action</th>
            
          </tr>
        </thead>
        {services?.map((pd, index) => (
          
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd?.displayName}</td>
              <td>{pd.email}</td>
              <td>
                <div >
                {pd.status ==='approved'?<button
                className="btn bg-success text-white p-2"
              > approved
              </button>: <button
                className="btn bg-secondary text-white p-2"
              > Pending
              </button>}
                </div>
                </td>
              <td>
              <div>
              {pd.status === 'approved'? "Disabled":   <button
                onClick={()=>{handleUpdate(pd._id)}}
                className="btn bg-warning text-white p-2"
              > approved
              </button>}

              </div>
              </td>
              <td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger text-white p-2"
              >
                Delete
              </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table> 
      
        </div>
    );
};

export default ManageOrder;