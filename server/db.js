const mongoose = require('mongoose')
const CONNECTION_URL = 'mongodb://localhost:27017/petcare' 

const dbconnection = async ()=>{
    try {
        await mongoose.connect(CONNECTION_URL)
        console.log("Database Connected successfully!!!!!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconnection;