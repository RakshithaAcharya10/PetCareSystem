import { Box, Button, TextField, Typography, Paper, MenuItem } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function PaymentForm() {

  const { bookingID } = useParams()

  const [form, setForm] = useState({
    amount: '',
    paymentMethod: ''
  })

  const navigate = useNavigate()
  const token = localStorage.getItem("UserToken")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePayment = async () => {
    try {
      await axios.post(
        "http://localhost:8000/payment/createPayment",
        { ...form, bookingID },
        {
          headers: { "auth-token": token }
        }
      )

      alert("Payment successful")
      navigate("/Trackstatus")

    } catch (error) {
      console.log(error)
      alert("Payment failed")
    }
  }

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #dcfce7, #bbf7d0)"
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
          sx={{ mb: 2, color: "#065f46", fontWeight: "bold" }}
        >
          Payment
        </Typography>

        <TextField
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          select
          label="Payment Method"
          name="paymentMethod"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        >
          <MenuItem value="UPI">UPI</MenuItem>
          <MenuItem value="Card">Card</MenuItem>
          <MenuItem value="Cash">Cash</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#065f46",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#047857" }
          }}
          onClick={handlePayment}
        >
          PAY NOW
        </Button>
      </Paper>
    </Box>
  )
}