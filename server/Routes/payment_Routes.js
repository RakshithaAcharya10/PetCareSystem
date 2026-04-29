const express = require("express")
const router = express.Router()

const {
    createPayment,
    getAllPayments,
    getUserPayments
} = require("../Controller/payment_controller")

const auth = require("../Middleware/Auth")

// ✅ Routes
router.post("/createPayment", auth, createPayment)
router.get("/getAllPayments", getAllPayments)
router.get("/getUserPayments", auth, getUserPayments)

module.exports = router