const { OrderModel }=require("../models/orderModel");

const { UserModel } =require("../models/userModel");

const {ProductModel} =require("../models/productModel")
 const GetDashboardData=async(req,res)=>{
    try{
        const products= await ProductModel.find({}).countDocuments();
        const adminCount= await UserModel.find({role:"admin"}).countDocuments();
        const superCount= await UserModel.find({role:"superadmin"}).countDocuments();
        admins=adminCount+superCount
        const users= await UserModel.find({role:"user"}).countDocuments();
        const orders=await OrderModel.find({}).countDocuments()
        res.send({
            message:"Dashboard Data",
            status:200,
            err:false,
            products,
            admins,
            users,
            orders
        })
    }catch(err){
        res.send({
            message:"Something went wrong",
            err,
            err:true,
            status:400
        })
    }
}



const getAdmins=async(req,res)=>{
    const {page}=req.query
    const skip=(page-1)*5
    try{
        const admins=await UserModel.find({$or:[{role:"admin"},{role:"disable"}]}).skip(skip).limit(5)
        const Totaladm=await UserModel.find({$or:[{role:"admin"},{role:"disable"}]}).countDocuments()
        res.send({
            message:"Total Data",
            status:200,
            err:false,
            admins,
            Totaladm
        })
    }catch(err){
        res.send({
            message:"Something went wrong",
            err,
            err:true,
            status:400
        })
    }
}

Adminrole=async(req,res)=>{
    const _id=req.params.id
    const {role}=req.body
    try{
        await UserModel.findByIdAndUpdate(_id,{role})
        res.send({
            message:"updated successfully",
            status:200,
            err:false
        })
    }catch(err){
        res.send({
            message:"Something went wrong",
            err,
            err:true,
            status:400
        })
    }
}

module.exports={
    GetDashboardData,
    getAdmins,
    Adminrole
}