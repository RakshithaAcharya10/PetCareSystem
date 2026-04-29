import React, { useState } from 'react'
import { Typography, Paper, TextField, Button, Box } from '@mui/material'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function Register() {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  })

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleregister = () => {
    axios.post("http://localhost:8000/user/registeruser", formdata)
      .then((res) => {
        alert(res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {/* ✅ HEADER */}
      <Box
        sx={{
          backgroundColor: "#1e3a5f",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "380px", height: "200px" }}
        />

        <Typography
          variant="h2"   // ✅ increased size
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white'
          }}
        >
          PetGlow Studio
        </Typography>
      </Box>

      {/* ✅ REGISTER FORM */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)"
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
          <Typography variant="h4" sx={{ mb: 2, color: "#1e3a8a", fontWeight: "bold" }}>
            Create Account
          </Typography>

          <TextField label="Name" name="name" fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField label="Email" name="email" fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField type="password" label="Password" name="password" fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField type="number" label="Phone" name="phone" fullWidth sx={{ mb: 2 }} onChange={handlechange} />
          <TextField label="Address" name="address" multiline rows={3} fullWidth sx={{ mb: 2 }} onChange={handlechange} />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1e3a5f",
              padding: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1e5f2b" }
            }}
            onClick={handleregister}
          >
            REGISTER
          </Button>

          <Typography sx={{ mt: 2 }}>
            Already Registered?{" "}
            <a href="/Login" style={{ color: "#1e3a5f", fontWeight: "bold", textDecoration: "none" }}>
              Login
            </a>
          </Typography>
        </Paper>
      </Box>
    </>
  )
}