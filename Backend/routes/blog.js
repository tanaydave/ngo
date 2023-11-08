const express= require('express')
const router = express.Router()
const blogController = require('../controllers/blog')

router 
.get('/',blogController.getAllBlog)
.get('/:id',blogController.getBlog)
.post('/',blogController.createBlog)
exports.router = router