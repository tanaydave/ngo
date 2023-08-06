const model = require("../models/message")
const mongoose = require('mongoose')

const Message = model.Message


exports.createMessage = (req, res) => {
    const message = new Message(req.body);
  
    message
      .save()
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  };