const jwt=require("jsonwebtoken")
require("dotenv").config()
const CartValidator=async(req,res,next)=>{
    const token=req.headers.authorization
    try{
        const decoded=jwt.verify(token,process.env.SecretKey)
        if(decoded){
            next()
        }
    }catch(err){
        console.log(err)
        res.send({
            message:"something went wrong",
            err,
            err:true,
            status:400
        })
    }
}

module.exports={
    CartValidator
}