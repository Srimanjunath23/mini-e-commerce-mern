const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAT:Date,
    address:String,
    number:String

});

const orderModel=mongoose.model('order',orderSchema)
 
module.exports=orderModel
