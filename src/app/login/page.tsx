'use client'

import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import  axios from "axios"
import toast from 'react-hot-toast';




export default function LoginPage(){
    const router = useRouter()
    const [user,setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled,setButtonDisabled] = React.useState(false)
    const [loading,setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = axios.post("/api/users/login",user)
            toast.success("Login Success")
            console.log("Sign Up Success",user)
            router.push("/profile")
        } catch (error:any) {
                console.log("Login Faild", error.message)
                toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])

    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

       <h1 className="text-2xl">
         Login
        </h1>

        
        <label htmlFor="email">email</label>
        <input
        className="p-2 text-black bg-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e)=> setUser({...user,email:e.target.value})}
        placeholder="email"
        ></input>

<label htmlFor="password">password</label>
        <input
        className="p-2 text-black bg-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value={user.password}
        onChange={(e)=> setUser({...user,password:e.target.value})}
        placeholder="password"
        ></input>

        <button className="p-2 border border-gray-300 rounded-lg mb-4 hover:bg-gray-400 hover:text-black focus:outline-none focus:border-gray-600" onClick={onLogin}>{buttonDisabled? "Can't LogIn" :"Log In"}</button>

        <Link href="/signup" >Visit Signup</Link>

        </div>
    )
}



