const express=require('express');
const { getProducts, getProductsById } = require('../controllers/productController');
const router=express.Router();



router.route('/product').get(getProducts);
router.route('/product/:id').get(getProductsById);



module.exports=router