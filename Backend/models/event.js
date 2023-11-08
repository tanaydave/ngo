const mongoose = require("mongoose")
const {Schema} = mongoose

const eventSchema = new Schema({
    heading:String,
    event_photo:String,
    date:Number,
    month:String,
    day:String,
    time:String,
    address:String
    
    
  })
  
  exports.Event = mongoose.model('event', eventSchema);