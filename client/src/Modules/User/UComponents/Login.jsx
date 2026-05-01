import React, { useState } from 'react'
import { Typography, Paper, TextField, Button, Box } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/logo.png"

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    axios.post("http://localhost:8000/user/Login", login)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("UserToken", res.data.token)
          alert("Login successfully!")
          navigate("/UAbout")
        } else {
          alert("Login failed")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Something went wrong")
      })
  }

  return (
    <>
      {/* ✅ SAME HEADER AS REGISTER */}
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
            Login to Your Account
          </Typography>

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1e3a5f",
              padding: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1e5f2b" }
            }}
            onClick={handleLogin}
          >
            LOGIN
          </Button>

          <Typography sx={{ mt: 2 }}>
            New User?{" "}
            <a
              href="/"
              style={{
                color: "#1e3a5f",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Register
            </a>
          </Typography>
        </Paper>
      </Box>
    </>
  )
}