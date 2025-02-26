
const orderModel = require("../models/orderModel")


exports.createOrder=async (req,res,next)=>{
    const cartItems=req.body.cartItems;
    const address=req.body.address;
    const number=req.body.number;
    const amount=Number(cartItems.reduce((acc,item)=>acc+(item.product.price*item.qty),0)).toFixed(2);
    const status='pending';
    const order= await orderModel.create({cartItems,amount,status,address,number});
    res.json(
        {
            success:true,
            message:"order created successfully",
            order


        }
    )
}
