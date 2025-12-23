import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup as authSignup } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth"
import Login from "./Login";



function SingUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signup = async (data) => {
        setError("")
        try {
            const UserData = await authService.createAccount(data)
            if (UserData) {
                const UserData = await authService.getCurrentUser()
                if (UserData) {
                    dispatch(Login(UserData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 
    border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100px" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sing in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;<Link
                        to="/signup"
                        className="font-medium  text-primary
        transition-all duration-200
        hover:underline">Sing Up</Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{
                    error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-x-5">
                        <Input
                            label="Full Name"
                            palaceholder="Enter your full name"
                            type="text"
                            {...register("name", {
                                required: true
                            })}
                        />
                        <Input
                            label="Email"
                            palaceholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.
                                        test(value) || "Please enter a valid email address"
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            palaceholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingUp;