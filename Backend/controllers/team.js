const model = require('../models/team')
const TeamMember = model.TeamMember

exports.createTeamMember=(req,res)=>{
    console.log("created member")

}
exports.getAllTeamMember=(req,res)=>{
    console.log("all members")
    
}
exports.getTeamMember=(req,res)=>{
    console.log("get a member")
    
}