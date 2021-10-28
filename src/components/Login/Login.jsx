import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import './Login.css'
const Login = () => {
    const {signInWithGoogle} = UseFirebase()
    return (
        <div className="section my-5">
            <h2>Login With</h2>
            <Link to="/">
            <div className="d-flex my-3 credent  align-center">
                <div className="g-logo d-flex">
                    <img className="g-img" src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg" alt="" />
                    </div>
                <div className=" login " >
                    <p  onClick={signInWithGoogle}>Continue with Google</p>
                </div>

            </div>
            </Link>
            <div>
                <div>
                    <p>Don't have an accout? <a href="/">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;