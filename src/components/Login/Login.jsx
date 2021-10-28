import React from 'react';
import {  useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css'
const Login = () => {
    //Redirect methed
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();
    //UseAuth contex api
    const {signInWithGoogle} = UseAuth()
    //google sign in
    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then((result)=>{
            const user = result.user;
            history.push(redirect_uri)
            console.log(user);
        })
        .catch(error =>{
            alert(error.message)
        })
        // setLoading(false)
    }
    return (
        <div className="section my-5">
            <h2>Login With</h2>
            <div onClick={handleSignInWithGoogle} className="d-flex cursor-pointer my-3 credent  align-center">
                <div className="g-logo d-flex">
                    <img className="g-img" src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg" alt="" />
                    </div>
                <div className=" login " >
                    <p  >Continue with Google</p>
                </div>

            </div>
            
            <div>
                <div>
                    <p>Don't have an accout? <a href="/">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;