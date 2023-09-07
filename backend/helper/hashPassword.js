const bcrypt=require("bcrypt")
const hashPassword=async(password)=>{
    try{
        const hashedpassword= await bcrypt.hash(password,5)
        return hashedpassword
    }catch(err){
        console.log(err)
    }
}


const comparePass=async(password,hashedpassword)=>{
    try{
        const match=await bcrypt.compare(password,hashedpassword)
        return match
    }catch(err){
        console.log(err)
    }
}
module.exports={
    hashPassword,
    comparePass
}