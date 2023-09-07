const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    address:{
        type:Object,
        state:{
            required:true,
            type:String
        },
        district:{
            required:true,
            type:String
        },
        pin_code:{
            type:String,required:true
        },
        house_number: {
            required:true,
            type:String
        },
        
    },
    mobile_number:{
        type:Number,required:true
    },
    products:{
        type:Array,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    versionKey:false,
    timeStamps:true
})

const OrderModel=mongoose.model("orders",orderSchema)

module.exports={
    OrderModel
}