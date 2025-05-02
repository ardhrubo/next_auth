import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';



export const sendMail = async ({email,emailType,userId}:any) => {
try {
    // create a hashed token
    const hasedhtoken = await bcryptjs.hash(userId.toString(),10)
    
    if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,
            {verifyToken:hasedhtoken,
            verifyTokenExpiry:Date.now()+ 3600000},
            {new:true,runValidators:true})
    }else if(emailType==="RESET"){
        await User.findByIdAndUpdate(userId,
            {forgotPasswordToken:hasedhtoken,
            forgotPasswordTokenExpiry:Date.now()+ 3600000},
            {new:true,runValidators:true})
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: process.env.mailtrap_user,
            pass: process.env.mailtrap_password
            }
        });

        const mailOptions = {
            from: 'ardhrubo@gmail.com',
            to:email,
            subject: emailType === "VERIFY" ? "Verify your email ": "Reset your password",
            html:`<p>Click <a href="${process.env.domain}/verifyemail?token=${hasedhtoken}">here</a> to
            ${emailType === "VERIFY" ? "Verify your email ": "Reset your password"}</p>
            `
        }

        const mailresponse = await transport.sendMail(mailOptions)

        return mailresponse
    
} catch (error:any) {
    throw new Error(error.message)
}


}





