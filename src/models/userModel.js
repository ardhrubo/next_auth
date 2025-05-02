import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username:{
        type: String,
        requried:[true,"Please Provide a username"],
        unique:true

    },
    email:{
        type: String,
        requried:[true,"Please Provide a username"],
        unique:true

    },
    password:{
        type: String,
        requried:[true,"Please Provide a username"],

    },
    isVerified:{
        type: Boolean,
        default:false,
    },
    role:{
        type: String,
        enum:["admin","user"],
        default: "user"
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

}) 



const User = mongoose.models["users"] || mongoose.model("users", userSchema);


export default User;