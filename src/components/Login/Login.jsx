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
            <h2> Login to Google from this page! </h2><br />
            <div  className="d-flex   align-center">
            <img onClick={handleSignInWithGoogle}  className="text-center mx-auto cursor-pointer" src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" alt=""/> 
            </div>
            <div class="well">
            <div class="g-signin2" data-onsuccess="onSignIn" data-width="240" data-height="50" data-longtitle="true"></div> 
            <br />
            </div>
         </div>
    );
};

export default Login;