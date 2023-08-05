const model = require("../models/message")
const Message =new model.Message()


exports.createMessage=(req,res)=>{
    // const donation = new Donation(req.body)
    res.json(req.body)

}