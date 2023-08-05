const mongoose = require("mongoose")
const {Schema} = mongoose




const donationSchema = new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type: String,required: true,unique: true,validate: {validator: function(v) {return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(v);},message: props => `${props.value} is not a valid email address!`}},
    phone:{type:String,required:true},
    donation_value:{type:Number,required:true}
    
    
  })
  
  exports.Donation = mongoose.model('donation', donationSchema);