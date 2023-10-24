const express=require("express");
const app= express();
app.listen(3000,()=>{
    console.log("app run successfully");
})
// default router 
app.get("/",(req,res)=>
{
    res.send(`<h1> HomePage</h1>`)
})