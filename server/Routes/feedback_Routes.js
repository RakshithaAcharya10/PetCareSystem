const express = require("express")
const router = express.Router()

const {
    createFeedback,
    getAllFeedbacks,
    getUserFeedbacks
} = require("../Controller/feedback_controller")

const auth = require("../Middleware/Auth")

// ✅ Routes
router.post("/createFeedback", auth, createFeedback)
router.get("/getAllFeedbacks", getAllFeedbacks)
router.get("/getUserFeedbacks", auth, getUserFeedbacks)

module.exports = router