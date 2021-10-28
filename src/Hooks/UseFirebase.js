
import {GoogleAuthProvider,signInWithPopup, signOut, getAuth} from 'firebase/auth'
import initialAuthentication from '../Firebase/firebase.config';

initialAuthentication();

const UseFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle =()=>{
    signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            alert(error.message)
        })
    }

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return{
        signInWithGoogle,
        logOut
    }
};

export default UseFirebase;