'use client'

import axios from "axios";
import Link from "next/link";
import { useState,useEffect } from "react";


export default function VerifyEmailPage(){

    const [token,setToken]  = useState("")
    const [verified,setVerified] = useState(false)
    const [error,setError] =  useState(false)

    const verifUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail',{token})
            setVerified(true);


        } catch (error:any) {
            setError(error)
            console.log(error.response.data)
            
        }
    }

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")
    },[])

    useEffect(()=>{
        if(token.length>0){
            verifUserEmail();
        }
    },[token])

    return (
        <>
        <div className="flex flex-col justify-center items-center
        min-h-screen py2">

            <h1 className="text-4xl">
                Email Verification
            </h1>
            <h2 className="bg-teal-500 p-2">
                {token ? "Veried": "no token"}
            </h2>
            {verified && (
                    
                    <div className="bg-purple-500 p-4 m-4 text-center">
                    <h2>
                        Verification succesfull 
                    </h2>
                        <Link className="" href='/login'>
                        Login
                        </Link>
                    </div>

                )}
                {error && (
                    
                    <div className="bg-purple-500 m-4 text-center p-4">
                    <h2>
                        Verification failed 
                    </h2>
                        <Link className="" href='/login'>
                        Login
                        </Link>
                    </div>

                )}


        </div>

        

        </>
    )

}


