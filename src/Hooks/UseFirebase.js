
import {GoogleAuthProvider, onAuthStateChanged,signInWithPopup, signOut, getAuth} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initialAuthentication from '../Firebase/firebase.config';

initialAuthentication();

const UseFirebase = () => {
    //Using useState
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    //UseEffect
    useEffect(()=>{
        const unsubscribed =onAuthStateChanged(auth, user=>{
            if(user){
                //user sign in
                console.log(user);
                setUser(user)
            }
            else{
                //user sign out
                setUser({})
            }
            setLoading(false)
        })
        return ()=> unsubscribed
    },[])
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle =()=>{
  return  signInWithPopup(auth, googleProvider)
      .finally(()=> setLoading(false))
    }
    // logout 
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error =>{
            alert(error.message)
        })
        .finally(()=> setLoading(false))
    }
    return{
        user,
        signInWithGoogle,
        logOut,
        loading
    }
};

export default UseFirebase;