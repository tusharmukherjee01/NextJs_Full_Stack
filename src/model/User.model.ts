
import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt:Date
}

const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
})

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessage:boolean,
    messages:Message[]
}

const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"User Name is Required!"],
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Email is Required!"],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please use a valid email"]
    },
    password:{
        type:String,
        required:[true,"Password is Required!"],
    },
    verifyCode:{
        type:String,
        required:[true,"verify code is Required!"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code is Required!"],
    },
    isVerified:{
       type:Boolean,
       default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
       default:true
    },
    messages:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",UserSchema))

export default UserModel

// 1st one it's already created just taking || 2nd one 1st time creating

// Note That here Nextjs is edge time running language so, it do not 
// understand it's first time or the previously already bootup -> 
// that's why 2 types of import ||
//  normal backEnd (Express) only once run 