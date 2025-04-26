'use client'

import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import  { axios } from "axios"



export default function LoginPage(){

    const [user,setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        
    }



    
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

        <button className="p-2 border border-gray-300 rounded-lg mb-4 hover:bg-gray-400 hover:text-black focus:outline-none focus:border-gray-600" onClick={onLogin}>Log In</button>

        <Link href="/signup" >Visit Signup</Link>

        </div>
    )
}



