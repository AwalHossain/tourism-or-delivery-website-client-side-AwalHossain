import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewUser = () => {
    const { register, handleSubmit,
        formState: { errors } } = useForm();
    const [data, setData ] = useState([])


   

    const onSubmit = data =>{
        data.status='pending'
        console.log(data);

    } 
    return (
        <div className="bg-primary">
            <h2>From Add new user</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="Service Name"  {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="my-2" placeholder="Service Description"   {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <p>This field is required</p>}
        {/* register your input into the hook by invoking the "register" function */}
      <input className="my-2" placeholder="service price" type="number" {...register("title")} />
      <input className="my-2" placeholder="You image url"  {...register("image", { required: true })} />
      {errors.image && <p>This field is required</p>}
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewUser;