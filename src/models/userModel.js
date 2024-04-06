import { verify } from "crypto";
import  mongoose  from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:[true, "Please provide a First Name"],
        unique:true
    },
    lname:{
        type:String,
        required:[true, "Please provide a Last Name"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "Please provide a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:String,
        default:"user"
    },
    forgotPasswordToken: String,
    forgotPasswordExpiriy: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;