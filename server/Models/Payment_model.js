const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    bookingID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["UPI", "Card", "Cash"],
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Success", "Failed"],
        default: "Pending"
    },

    transactionID: {
        type: String
    },

    paymentDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Payment", paymentSchema)