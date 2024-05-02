const express =  require("express");
const dotenv = require("dotenv").config();
const donationRouter = require('./routes/donation')
const messageRouter = require('./routes/message')
const eventRouter = require('./routes/event')
const newsRouter = require('./routes/news')
const blogRouter = require('./routes/blog')
const teamRouter = require('./routes/team')


const mongoose = require("mongoose")
const cors = require("cors"); 




const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(cors())
app.use('/donation',donationRouter.router)
app.use('/message',messageRouter.router)
app.use('/event',eventRouter.router)
app.use('/news',newsRouter.router)
app.use('/blog',blogRouter.router)
app.use('/team',teamRouter.router)


//connecting to database
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://daveth1106:${process.env.DB_PASSWORD}@tanaycluster.lcvjsid.mongodb.net/?retryWrites=true&w=majority`);
    console.log("database connected")
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }



app.listen(5000 , ()=>{
    console.log(`server running on 5000` )
})



