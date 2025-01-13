import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type : String,
            reqired : true,
        },
        email: {
            type : String,
            reqired : true,
            unique : true,
        },
        password: {
            type : String,
            reqired : true,
            minlength : 6,
        },
        profilePic: {
            type : String,
            default : "",
        }
    },
    { timestamps : true }
);


const User  = mongoose.model("User", userSchema);

export default User;