const mongoose = require('mongoose')
const {Schema} = mongoose

const teamMemberSchema = new Schema ({
    name:String,
    role:String,
    socials:{
        linkedIn:String,
        twitter:String,
        instagram:String,
    }



})

exports.TeamMember = mongoose.model('Team_member',teamMemberSchema)