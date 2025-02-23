const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const dbConnection = require('./config/dbConnection');
dotenv.config({path:path.join(__dirname,'config','config.env')})

const product=require('./routes/product');
const order=require('./routes/order');
app.use(express.json());
dbConnection();
app.use('/api/v1',product);
app.use('/api/v1',order);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT:${process.env.PORT}\n`);
})