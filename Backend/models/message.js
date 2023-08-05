const mongoose = require("mongoose")
const {Schema} = mongoose




const messageSchema = new Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type: String,unique: true,validate: {validator: function(v) {return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(v);},message: props => `${props.value} is not a valid email address!`}},
    phone:{type:String},
    message:{type:String}
    
    
  })
  
  exports.Message = mongoose.model('message',messageSchema);