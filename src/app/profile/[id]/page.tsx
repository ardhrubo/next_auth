export default function ProfilePage({params}:any){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">


            <p>Profile page for <span className="p-3 rouned bg-orange-400 text-gray">{params.id} </span>
            </p>

        </div>
        
        </>
    )
}


