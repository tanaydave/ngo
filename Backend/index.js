const express =  require("express");
const dotenv = require("dotenv").config();

const app = express()
app.use(express.json())

const port = process.env.Port || 5001
app.listen(port , ()=>{
    console.log(`server running on  ${port}` )
})
app.get("/details",(req,res)=>{
    res.status(200).json({mesage:"hello from api"})
   
})

app.post("/details",(req,res)=>{
    const data = req.body
    res.status(200).json(data)
})
