import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from "../../../assets/logo.png"

export default function Bookingform() {

  const { serviceID } = useParams()

  const [booking, setBooking] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    amount: 0
  })

  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  const handlechange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/service/getservicebyid/${serviceID}`)
      .then((res) => {
        setPrice(res.data.byid.service_price)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const utoken = localStorage.getItem('UserToken')

  const Handlebooking = async () => {
    try {
      await axios.post(
        "http://localhost:8000/booking/Createbooking",
        { ...booking, serviceID, amount: price },
        { headers: { "auth-token": utoken } }
      )
      alert("Booking done successfully")
      navigate("/Trackstatus")
    } catch (error) {
      console.log(error)
      alert("Booking failed")
    }
  }

  return (
    <>
      {/* FORM */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #deeef4, #2f829d)"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: { xs: "90%", sm: "500px" },
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#1e3a8a", fontWeight: "bold" }}
          >
            Book Service
          </Typography>

          <TextField label="Full Name" name='fullname' fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField label="Email" name='email' fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField type='number' label="Phone" name='phone' fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField label="Address" name='address' multiline rows={3} fullWidth sx={{ mb: 2 }} onChange={handlechange} />

          <TextField
            label="Service Price"
            type='number'
            value={price}
            fullWidth
            sx={{ mb: 2 }}
            inputProps={{ readOnly: true }}
          />

          <Button
            fullWidth
            variant='contained'
            sx={{
              backgroundColor: "#1e3a5f",
              padding: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1e40af" }
            }}
            onClick={Handlebooking}
          >
            BOOK NOW
          </Button>
        </Paper>
      </Box>
    </>
  )
}