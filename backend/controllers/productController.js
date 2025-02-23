const productModel=require('../models/productModel');
exports.getProducts=async (req,res,next)=>{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await productModel.find(query);
    res.json(
        {
            success:true,
            message:"ALL PRODUCT ARE DISPLAYED",
            products
            

        }
    )
}

exports.getProductsById=async (req,res,next)=>{
    try {
        id=req.params.id
        const product=await productModel.findById(id);
        res.json(
            {
                success:true,
                message:"SINGLE  PRODUCT IS DISPLAYED",
                product
    
            }
        )
        
    } catch (error) {
       res.status(404).json({
        message:"Product not found :("
       })
   
    }
}