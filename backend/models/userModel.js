const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    first_name:{
        required:true,
        type:String
    },
    last_name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    role:{
        type:String,
        default:"user"
    }
},{
    timestamps:true,
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}