const Feedback = require("../Models/Feedback_model")

// ✅ Create Feedback
const createFeedback = async (req, res) => {
    try {
        const { fullname, email, feedback, rating } = req.body
        const uid = req.userid   // from auth middleware

        const newFeedback = new Feedback({
            fullname,
            email,
            feedback,
            rating,
            userID: uid
        })

        const savedFeedback = await newFeedback.save()

        res.status(201).json({
            message: "Feedback submitted successfully",
            fdata: savedFeedback
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ Get All Feedbacks (Admin)
const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .populate("userID", "name email")

        res.status(200).json({
            message: "All Feedbacks",
            fdata: feedbacks
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ Get User Feedbacks
const getUserFeedbacks = async (req, res) => {
    try {
        const uid = req.userid

        const feedbacks = await Feedback.find({ userID: uid })

        res.status(200).json({
            message: "User Feedbacks",
            fdata: feedbacks
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {
    createFeedback,
    getAllFeedbacks,
    getUserFeedbacks
}