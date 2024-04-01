const express=require("express")
const mongoose=require("mongoose")
const app=express()
const router=require("./router")
require("dotenv").config()
const url=process.env.MONGO_URL
mongoose.connect(url).then(()=>{
    console.log("mongoose is working")
}).catch(()=>{
    console.log("mongoose is not working")
})
app.use(express.json())
app.use(router)

app.listen(process.env.PORT,process.env.HOST,()=>console.log("http://localhost:3011"))