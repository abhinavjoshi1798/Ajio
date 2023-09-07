const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    image:{
        required:true,
        type:String
    },
    brand:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    adminId:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})


const ProductModel=mongoose.model("product",productSchema)
module.exports={
    ProductModel
}