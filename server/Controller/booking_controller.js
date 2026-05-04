const Bookingtable = require('../Models/Booking_model')


const Createbooking = async (req, res) => {
    try {
        const { fullname, email, phone, address, serviceID, amount } = req.body;
        const uid = req.userid
        const newbooking = new Bookingtable({
            fullname,
            email,
            phone,
            address,
            serviceID,
            amount,
            userID: uid
        })
        const savebooking = await newbooking.save()
        res.status(201).json({ message: "Booking created succesfully", bdata: savebooking })
        console.log("Booking created succesfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}

const getAllbooking = async (req, res) => {
    try {
        const bookings = await Bookingtable.find()
            .populate("userID", "name address phone")
            .populate("serviceID", "service_name service_price ")
        console.log(bookings)
        res.status(200).json({ message: "All Bookings", bdata: bookings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}

const updateStatus = async (req, res) => {
    try {
        const { newstatus } = req.body;
        const updatedbooking = await Bookingtable.findByIdAndUpdate(req.params.id, { bookingstatus: newstatus }, { new: true })

        if (!updatedbooking) {
            res.status(404).json({ message: "Booking not found" })
        }
        res.status(200).json({ message: "Status updated", ubooking: updatedbooking })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getuserbookings = async (req, res) => {
    try {
        const uid = req.userid
        console.log(uid)
        const bookings = await Bookingtable.find({ userID: uid })
            .populate("userID", "name address phone")
            .populate("serviceID", "service_name service_price ")
        res.status(200).json({ message: "Bookings found", bdata: bookings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}


module.exports = { Createbooking, getAllbooking, updateStatus, getuserbookings }