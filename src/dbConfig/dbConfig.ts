import { error } from "console";
import mongoose from "mongoose";

export async function connectDB() {
    try{

        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongoDB connected successfully')
        })

        connection.on('error',(err)=>{
            console.log("something went wrong connecting mongodb",err)
            process.exit()
        })


    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }

}


