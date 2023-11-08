const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event')
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router 
.get('/',eventController.getAllEvents)
.get('/:id',eventController.getEvent)
.post('/',eventController.createEvent)


exports.router= router