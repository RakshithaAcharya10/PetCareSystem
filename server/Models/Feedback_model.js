const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    feedback: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Feedback", feedbackSchema)