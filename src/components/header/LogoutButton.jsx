import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/confg"
import {Logout} from "../../store/authSlice"


function LogoutButton () {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authService.Logout().then(()=>{
            dispatch(Logout())
        })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200
        hover:bg-blue-100 rounded-full">
            Logout
        </button>
    );
}

export default LogoutButton;