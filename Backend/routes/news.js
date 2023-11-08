const express= require('express')
const router = express.Router()
const newsController = require('../controllers/news')
router 
.get('/',newsController.getAllNews)
.get('/:id',newsController.getNews)
.post('/',newsController.createNews)
exports.router =router;
