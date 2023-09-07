const express=require("express")
const { GetDashboardData, getAdmins, Adminrole } = require("../controllers/admindashboardController")
const { SuperAdmin } = require("../middlewares/SuperAdmin")

const AdminRouter=express.Router()

AdminRouter.get("/dashboard",GetDashboardData)
AdminRouter.get("/getadmins",SuperAdmin,getAdmins)
AdminRouter.patch("/update/:id",SuperAdmin,Adminrole)

module.exports={
    AdminRouter
}