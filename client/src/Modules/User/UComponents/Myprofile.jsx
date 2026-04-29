import React, { useEffect, useState } from 'react'
import { Typography, Paper, TextField, Button, Box } from '@mui/material'
import logo from "../../../assets/logo.png"

export default function Myprofile() {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const token = localStorage.getItem("UserToken")

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    viewprofile()
  }, [])

  const viewprofile = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/getProfile", {
        method: "GET",
        headers: { "auth-token": token }
      })

      const details = await response.json()
      setFormdata(details.udata)
    } catch (error) {
      console.log(error)
    }
  }

  const handleprofile = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/updateprofile", {
        method: "PUT",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        }
      })

      const details = await response.json()
      alert("Profile updated successfully")
      setFormdata(details.udetails)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* ✅ PROFILE FORM */}
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
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#1e3a8a", fontWeight: "bold" }}
          >
            My Profile
          </Typography>

          <TextField
            label="Name"
            name="name"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={formdata.name}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={formdata.email}
          />

          <TextField
            label="Phone"
            name="phone"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={formdata.phone}
          />

          <TextField
            label="Address"
            name="address"
            multiline
            rows={3}
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={formdata.address}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1e3a5f",
              padding: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1e40af" }
            }}
            onClick={handleprofile}
          >
            UPDATE PROFILE
          </Button>
        </Paper>
      </Box>
    </>
  )
}