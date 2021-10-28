import firebaseConfig from "./firebase.init"
import {initializeApp} from 'firebase/app'
const initialAuthentication=()=>{
    initializeApp(firebaseConfig)
}

export default initialAuthentication;