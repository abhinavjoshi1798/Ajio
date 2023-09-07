const express=require("express")
const { orderProduct, getOrders } = require("../controllers/orderController")
const { Authenticator } = require("../middlewares/Authenticator")
const { AdminValidator } = require("../middlewares/AdminValidator")
const orderRouter=express.Router()


orderRouter.post("/addproduct",orderProduct)
orderRouter.get("/getorders",AdminValidator,getOrders)


module.exports={
    orderRouter
}