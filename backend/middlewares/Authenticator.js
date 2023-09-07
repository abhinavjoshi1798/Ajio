const jwt=require("jsonwebtoken")
require("dotenv").config()
const Authenticator=(req,res,next)=>{
    try{
        let  token=req.headers.authorization;
        const decoded=jwt.verify(token,process.env.SecretKey)
        if(decoded){
            
            if(decoded.role=="deactivate"){
                res.status(200).send({
                    message:"your Account is deactivated, please contact with superadmin",
                    status:200,
                    err:false
                })
            }
            else{
                next()
            }
        }
        res.status(200).send({
            message:"You are not Authorized!",
            status:200,
            error:false
        })
    }catch(err){
        res.send({
            message:"Invalid token",
            err:true,
            status:400
        })
    }
}

module.exports={
    Authenticator
}