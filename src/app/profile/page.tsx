"use client"

import axios from "axios";
import toast from "react-hot-toast";
import  {useRouter} from "next/navigation";



export default function ProfilePage(){
    const router = useRouter()

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


    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <span>Profile page</span>
        
            <hr />

        <button className="bg-teal-500 hover:bg-teal-700 font-bold rounded px-4 py-2 mt-3 text-white" onClick={logout}>Log Out</button>

        </div>
        </>
    )
}


