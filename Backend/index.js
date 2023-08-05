const express =  require("express");
const dotenv = require("dotenv").config();
const donationRouter = require('./routes/donation')
const messageRouter = require('./routes/message')


const app = express()
app.use(express.json())
app.use('/donation',donationRouter.router)
app.use('/message',messageRouter.router)


const port = process.env.Port || 5001



app.listen(port , ()=>{
    console.log(`server running on  ${port}` )
})



