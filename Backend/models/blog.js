const mongoose = require("mongoose")
const {Schema} = mongoose




const blogSchema = new Schema({
    heading:String,
    date:Number,
    year:Number,
    month:String,
    short_content:String,
    complete_content:String
    
  })
  
  exports.Blog = mongoose.model('blog', blogSchema);