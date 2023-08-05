const express = require('express')
const router = express.Router()
const donationController = require('../controllers/donation')

router
 .post("/",donationController.createDonation)
//  .get("/", donationController.getAllDonation)
//  .get("/:id", donationController.getDonation)
//  .put("/:id", donationController.replaceDonation)
//  .patch("/:id", donationController.updateDonation)
//  .delete("/:id", donationController.deleteDonation)

 exports.router= router