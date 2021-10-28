import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth'
import './Order.css'
const Order = () => {
    const {user} = UseAuth()
    const { register, handleSubmit, watch,
        formState: { errors } } = useForm();
    const [data, setData ] = useState([])


   

    const onSubmit = data =>{
        data.status='pending'
        console.log(data);

    } 
    return (
        <div className="regis container ">
            <h2>Hello ther I am dynamic </h2>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input className="my-2" placeholder="You name" value={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
            <input className="my-2" placeholder="You email" type="email" value={user.email}  {...register("Email")} />
            <textarea className="my-2" placeholder="You description" type="text" {...register("desc")} />
            <select {...register("event", { required: true })}>
                   <option value={event}>{event}</option>
                {
                    data.map( info => <option key={info._id} value={info.title}>{info.title}</option> )
                }
             
            </select>
            
                <input type="text" />
            
                
            <input type="submit" />
            </form> */}
             <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="You name" defaultValue={user.displayName} {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="my-2" placeholder="You email"  defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <p>This field is required</p>}
            {/* register your input into the hook by invoking the "register" function */}
                  {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="service title" {...register("title")} />
      <input className="my-2" placeholder="You image url"  {...register("image")} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Order;