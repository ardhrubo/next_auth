"use client"

import axios from "axios";
import toast from "react-hot-toast";
import  {useRouter} from "next/navigation";
import { useState } from "react";
import Link from "next/link";



export default function ProfilePage(){
    const router = useRouter()
    const [data,setData] = useState("none")

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successfully')
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/profile')
        console.log(res.data)
        await setData(res.data.data.username)

    }


    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <span>Profile page</span>
            <h2>{data=== 'nothing' ? "Nothing":<Link href={`/profile/${data}`}>{data}</Link> }</h2>
            <hr />

        <button className="bg-teal-500 hover:bg-teal-700 font-bold rounded px-4 py-2 mt-3 text-white" onClick={logout}>Log Out</button>
        <button className="bg-purple-500 hover:bg-teal-700 font-bold rounded px-4 py-2 mt-3 text-white" onClick={getUserDetails}>Get User Details</button>

        </div>
        </>
    )
}


