const  { CartModel } =require("../models/cartModel")

const addtoCart=async(req,res)=>{
    const {productId,size,image,name,price,userId,quantity,originalPrice}=req.body
    try{
        const product=new CartModel({productId,size,image,name,price,userId,quantity,originalPrice})
        await product.save()
        res.send({
            message:"successfully added to cart",
            status:200,
            err:false,
            product
        })
    }catch(err){
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}

const getCartdata=async(req,res)=>{
    const {userId}=req.params
    try{
        const products= await CartModel.find({userId})
        let totalPrice=0
        products.forEach((el)=>{
            totalPrice+=+el.price;
            return totalPrice
        })
        const total=await CartModel.find({userId}).countDocuments()
        res.send({
            message:"Cart Data",
            products,
            totalPrice,
            total,
            err:false,
            status:200
        })
    }catch(err){
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}

const DeleteCartdata=async(req,res)=>{
    const _id=req.params.id
    try{
        await CartModel.findByIdAndDelete(_id)
        res.send({
            message:"successfully Deleted!",
            err:false,
            status:200
        })
    }catch(err){
        console.log(err)
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}


const UpdateCartdata=async(req,res)=>{
    const _id=req.params.id
    const {count,p}=req.body
    const updatedprice=Number(p)
    console.log(count)
    
    try{
        await CartModel.updateOne({_id},{$inc:{quantity:count,price:(updatedprice*(count))}})
        res.send({
            message:"successfully Updated!",
            err:false,
            status:200
        })
    }catch(err){
        console.log(err)
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}

module.exports={
    addtoCart,
    getCartdata,
    DeleteCartdata,
    UpdateCartdata
}