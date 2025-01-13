import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";


export const authOptions:NextAuthOptions={

    providers:[
        CredentialProvider({
            id:"credentials",
            name:"Credentials",
        credentials: {
        username: { label: "Email",type:"text"},
        password: { label: "Password", type: "password" },
      },
     async authorize(credentials:any):Promise<any> {
         
     }
  })
    ]
}