const mongoose=require('mongoose');


const dbConnection=()=>{
    mongoose.connect(process.env.db_uri).then((con)=>{
        console.log("DB CONNECTED TO "+ con.connection.host )
    })
}

module.exports=dbConnection;