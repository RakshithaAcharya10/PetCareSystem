const Payment = require("../Models/Payment_model")

// ✅ Create Payment
const createPayment = async (req, res) => {
    try {
        const { bookingID, amount, paymentMethod } = req.body
        const uid = req.userid

        const newPayment = new Payment({
            bookingID,
            amount,
            paymentMethod,
            userID: uid,
            paymentStatus: "Success",   // for now auto success
            transactionID: "TXN" + Date.now()
        })

        const savedPayment = await newPayment.save()

        res.status(201).json({
            message: "Payment successful",
            pdata: savedPayment
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ Get All Payments (Admin)
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find()
            .populate("userID", "name email")
            .populate("bookingID")

        res.status(200).json({
            message: "All Payments",
            pdata: payments
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

// ✅ Get User Payments
const getUserPayments = async (req, res) => {
    try {
        const uid = req.userid

        const payments = await Payment.find({ userID: uid })
            .populate("bookingID")

        res.status(200).json({
            message: "User Payments",
            pdata: payments
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {
    createPayment,
    getAllPayments,
    getUserPayments
}