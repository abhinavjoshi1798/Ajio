const express=require("express")
const { userRegistration, userLogin, getUser, getAlluser } = require("../controllers/userControllers")
const { Authenticator } = require("../middlewares/Authenticator")
const { AdminValidator } = require("../middlewares/AdminValidator")

const userRouter=express.Router()

userRouter.post("/register",userRegistration)
userRouter.post("/login",userLogin)
userRouter.get("/getusers",AdminValidator,getUser)


module.exports={
    userRouter
}