const express = require("express");
const dbconnection = require("./db");
const cors = require("cors")
const userroutes = require("./Routes/user_Routes")
const serviceroutes = require("./Routes/service_Routes")
const adminroutes = require("./Routes/admin_Routes")
const categoryroutes = require("./Routes/category_Routes")
const bookingroutes = require("./Routes/booking_Routes")
const feedbackroutes = require("./Routes/feedback_Routes")

const app = express();

const PORTNUMBER = 8000;
app.listen(PORTNUMBER, () => {
    console.log(`Server is running on portnumber: ${PORTNUMBER}`)
})

dbconnection()
app.get('/apitest',(req, res)=>{
    res.send("HELLO SERVER") //response text from server
})

app.use(cors())
app.use(express.json())
app.use('/user', userroutes)
app.use('/service', serviceroutes)
app.use('/admin', adminroutes)
app.use('/category', categoryroutes)
app.use('/booking', bookingroutes)
app.use('/feedback', feedbackroutes)
app.use('/image',express.static("./Uploads"))