const mongoose = require("mongoose")
const {Schema} = mongoose




const newsSchema = new Schema({
    topic:String,
    headline:String,
    short_content:String,
    complete_content:String,
    date:Number,
    month:String,
    year:Number
    
    
  })
  
  exports.News = mongoose.model('news', newsSchema);