const model = require("../models/donation")
const mongoose = require('mongoose')
const Donation = model.Donation

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

exports.createDonation = async(req, res) => {
    const donation = new Donation(req.body);
    
    const session = await stripe.checkout.sessions.create({ 
      payment_method_types: ["card"], 
      line_items: [ 
        { 
          price_data: { 
            currency: "inr", 
            product_data: { 
              name: donation.first_name, 
            }, 
            unit_amount: donation.donation_value * 100, 
          }, 
          quantity: 1,
          
        }, 
      ], 
      mode: "payment", 
      success_url: "http://orinovafoundation.org/Contact", 
      cancel_url: "http://orinovafoundation.org/Events", 
    }); 
    // console.log(session)
    res.json({id:session.id});
    // console.log(session.id)
    
    // const pollPaymentStatus = async (sessionId) => {
    //   try {
    //     console.log(sessionId)
    //     const session = await stripe.checkout.sessions.retrieve(sessionId);
        
    //     if (session.payment_status === 'paid') {
    //       donation
    //           .save()
    //           .then((doc) => {
    //             res.status(201).json(doc);
    //           })
    //           .catch((err) => {
    //             res.status(401).json(err);
    //           });
              
    //       // Payment is now successfully completed
    //       // Update your database with the new status and additional data
    //     } else{
    //       console.log("not posted to database ")
    //     }
    //   } catch (error) {
    //     // Handle errors
    //     console.log(error)
    //   }

      
    // };
    // setInterval(() => {
    //   pollPaymentStatus(session.id);
    // }, 10000)
    const interval = setInterval(async () => {
      const sessionId = session.id;
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
    
        if (session.payment_status === 'paid') {
          // Payment is now successfully completed
          // Update your database with the new status and additional data
          
          // Clear the interval since you no longer need to poll
          donation
              .save()
              
          clearInterval(interval);
        } else  {
          // Payment is still pending
          // Continue polling or implement a timeout mechanism
          console.log("not posted to database")
        } 
      } catch (error) {
        // Handle errors
      }
    }, 30000);

    
  };

  exports.getAllDonation = async (req, res) => {
    const donations = await Donation.find();
  
    res.json(donations);
  };