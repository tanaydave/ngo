const model = require('../models/event')
const Event = model.Event
const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv").config();


cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    // secure: true
  });

exports.createEvent =async(req,res)=>{
    const{heading,event_photo,date,month,day,time,address}=req.body
    const file = req.file.buffer
    const event = new Event(req.body)
    console.log(event,file)
    // event
    //   .save()
    //   .then((doc) => {
    //     res.status(201).json(doc);
    //   })
    //   .catch((err) => {
    //     res.status(401).json(err);
    //   });

}
exports.getAllEvents =async(req,res)=>{
    console.log('hello2')
    
}
exports.getEvent =async(req,res)=>{
    console.log('hello3')
    
}