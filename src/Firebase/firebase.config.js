import firebaseConfig from "./firebase.init"
import {initializeApp} from 'firebase/app'
// Initialize authentication
const initialAuthentication=()=>{
    initializeApp(firebaseConfig)
}

export default initialAuthentication;