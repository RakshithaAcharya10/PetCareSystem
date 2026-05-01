import React, { useState } from 'react'
import { Typography, Paper, TextField, Button, Box } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/logo.png"

export default function ALogin() {
  const [adminlogin, setAdminlogin] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setAdminlogin({ ...adminlogin, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    axios.post('http://localhost:8000/admin/loginadmin', adminlogin)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem('UserToken', res.data.token)
          alert("Login successful")
          navigate('/Admin')
        } else {
          alert("Login Unsuccessful")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Login Failed")
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
          variant="h2"
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

      {/* ✅ LOGIN FORM */}
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
            Admin Login
          </Typography>

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleChange}
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
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Paper>
      </Box>
    </>
  )
}