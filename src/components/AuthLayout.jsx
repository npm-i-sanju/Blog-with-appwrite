import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function AuthLayout({children, authentication = true}) {
const navigate = useNavigate();
const [loader, setLoader] = useState(true);
const authstatus = useSelector((state) =>
    state.auth.isAuthenticated)

useEffect(()=>{
    // Redirect based on authentication status
    // make it more easy to read
// if (authstatus === true){
//     navigate('/')
// } else if (authstatus === false){
//     navigate('/login')
// }

if(authentication && authstatus !== authentication){
    navigate('/login')
} else if(!authentication && authstatus !== authentication){
    navigate('/')
}
},[authstatus,navigate,authentication])



    return loader ? <h1>Loading...</h1> : <>{children}</>
        
}


export default AuthLayout;