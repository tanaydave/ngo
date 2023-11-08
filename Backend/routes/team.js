const express= require('express')
const router = express.Router()
const teamController = require('../controllers/team')
router 
.get('/',teamController.getAllTeamMember)
.get('/:id',teamController.getTeamMember)
.post('/',teamController.createTeamMember)
exports.router =router;