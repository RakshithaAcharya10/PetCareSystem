const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique:true, required: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true}
})

module.exports = mongoose.model("User", userschema)