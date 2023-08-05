const model = require("../models/donation")
const Donation =new model.Donation()


exports.createDonation=(req,res)=>{
    // const donation = new Donation(req.body)
    res.json(req.body)

}