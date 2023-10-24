const mongoose=require("mongoose");
require("dotenv").config();

const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {
        useNewUrlParser:True,
        useunifiedTopology:true,
        })
        .then(console.log("db connection successful"))
        .catch((error)=>{
            console.log("db facing issue");
            console.log(error);
            process.exit(1);
        }
        )
};
module.exports=connectWithDb;

