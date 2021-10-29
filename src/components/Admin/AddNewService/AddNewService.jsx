import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit,reset,
        formState: { errors } } = useForm();
    const [data, setData ] = useState([])


   

    const onSubmit = data =>{
        // data.status='pending'
        fetch("https://polar-tor-84735.herokuapp.com/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
                alert("Data successfully added")
                console.log(result)
                reset()
            } );
          console.log(data);
    } 
    return (
        <div className="bg-primary">
            <h2>From Add new user</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="Service Name"  {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <textarea className="my-2" placeholder="Service Description"   {...register("desc", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <p>This field is required</p>}
        {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="service price" type="number" {...register("price")} />
      <input className="my-2" placeholder="You image url"  {...register("image", { required: true })} />
      {errors.image && <p>This field is required</p>}
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;