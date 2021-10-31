import React,{useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth'
import './Order.css'
import { trackPromise } from 'react-promise-tracker';
const Order = () => {
    const {user} = UseAuth();
    const history = useHistory();
    //useParams
    const {serviceId} = useParams()
    const { register, handleSubmit, watch,
        formState: { errors } } = useForm();
    // const [data, setData ] = useState([])

    //Fetching data
    const [services, setServices] = useState([]);
    useEffect(()=>{
        trackPromise(
            fetch('https://polar-tor-84735.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        )
    },[])   
   
    const filterData = services.filter(data => serviceId.includes(data._id))
    const desc = filterData[0]?.desc;
    const img = filterData[0]?.image;
    const name = filterData[0]?.name;
    console.log( name);

    const onSubmit = data =>{
        data.status='pending'
        data.displayName=user?.displayName
        data.name = name;
        data.img = img
        data.desc = desc
        console.log(data);
        //track promise
        trackPromise(
            fetch('https://polar-tor-84735.herokuapp.com/placeOrder',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result =>{
                alert("You Order placed")
                console.log(result);
                history.push('/home')
            })
        )

    } 
    return (
        <div className=" my-5 container">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                <div className="card">
                    <div className="">
                        <img className="card-img-top card-img " src={img} alt="" />
                    </div>
                    <div>
                        <h5 className="text-black text-2xl">{name}</h5>
                        <p>{desc}</p>
                    </div>
                </div>
                </div>
                <div>
                <div className="col">
                <div className="card d-block bg-warning">
                <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="my-2" placeholder="You name" defaultValue={user?.displayName} {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input className="my-2" placeholder="You email"  value={user.email} {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <p>This field is required</p>}
            <input className="my-2" placeholder="You address"  {...register("address")} />
            <div class="md:flex-1 md:pr-3">
          <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Street Address</label>
          <input class="w-full shadow-inner p-2 border-0" type="text" name="address_street" placeholder="555 Roadrunner Lane" />
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-xs font-bold">Phone</label>
          <input class="w-full shadow-inner p-2 border-0" type="tel" name="phone" placeholder="(555) 555-5555"/>
        </div>
            <input className="bg-success text-green" type="submit" />
            </form>
                </div>
                </div>

                </div>
            </div>

        </div>
    );
};

export default Order;