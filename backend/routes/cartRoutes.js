const express=require("express")
const { addtoCart, getCartdata, DeleteCartdata, UpdateCartdata } = require("../controllers/cartController")
const { CartValidator } = require("../middlewares/CartValidator")

const cartRouter=express.Router()

cartRouter.post("/addproduct",CartValidator,addtoCart)
cartRouter.get("/getcart/:userId",CartValidator,getCartdata)
cartRouter.delete("/delete/:id",CartValidator,DeleteCartdata)
cartRouter.patch("/update/:id",CartValidator,UpdateCartdata)

module.exports={
    cartRouter
}