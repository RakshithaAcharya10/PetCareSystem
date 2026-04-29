const mongoose = require("mongoose")
const bookingschema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    serviceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    }, 

    bookingDate: { type: Date, default: Date.now },

    amount: { type: Number, required: false },

    bookingstatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Completed"],
        default: "Pending"
    }
})

module.exports = mongoose.model("Booking", bookingschema)