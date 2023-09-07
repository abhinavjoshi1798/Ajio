const jwt=require("jsonwebtoken")
require("dotenv").config()
const AdminValidator=(req,res,next)=>{
    let token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,process.env.SecretKey)
        if(decoded){
            if(decoded.role==="admin" || decoded.role==="superadmin"){
                next()
            }
            else{
                res.send({
                    message:"You are not authorized",
                    err:false,
                    status:true
                })
            }
        }


    }catch(err){
        res.send({
            message:"Invalid token",
            err:true,
            status:400
        })
    }
}

module.exports={
    AdminValidator
}