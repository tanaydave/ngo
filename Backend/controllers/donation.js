const model = require("../models/donation")
const mongoose = require('mongoose')
const Donation = model.Donation


exports.createDonation = (req, res) => {
    const donation = new Donation(req.body);
  
    donation
      .save()
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  };

  exports.getAllDonation = async (req, res) => {
    const donations = await Donation.find();
  
    res.json(donations);
  };