import { resend } from "@/lib/resend"
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResponse"

export default async function sendEmail(
    email:string,
    username:string,
    otp:string
):Promise<ApiResponse> {
    

    try{
    const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: "Verification Code",
    react: VerificationEmail({username,otp}),
  });

  return {success:true,message:"Verification Email Send Successfully!!"}
    }catch(error){
        console.log("Error While sending verification email",error)
        return {success:false,message:"Failed to send verification email"}
    }
}

