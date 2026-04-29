const express = require('express')
const route =express.Router()
const {Createbooking, getAllbooking, updateStatus, getuserbookings} = require('../Controller/booking_controller')
const auth =require('../Middleware/Auth')
route.post("/Createbooking",auth, Createbooking)
route.get("/getAllbooking", getAllbooking)
route.put("/updateStatus/:id", updateStatus)
route.get("/getuserbookings", auth, getuserbookings)
module.exports =route