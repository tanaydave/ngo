const express = require('express')
const router = express.Router()
const messageController = require('../controllers/message')

router
 .post("/",messageController.createMessage)
//  .get("/", messageController.getAllMessage)
//  .get("/:id", messageController.getMessage)
//  .put("/:id", messageController.replaceMessage)
//  .patch("/:id", messageController.updateMessage)
//  .delete("/:id", messageController.deleteMessage)

 exports.router= router