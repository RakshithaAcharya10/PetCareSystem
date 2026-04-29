import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'
import logo from "../../../assets/logo.png"

export default function AHome() {
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

      {/* ✅ MAIN CONTENT */}
      <Box
        sx={{
          minHeight: "80vh",
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "40px",
            borderRadius: "15px",
            textAlign: "center",
            width: "80%"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#1e3a5f",
              fontWeight: "bold",
              mb: 3
            }}
          >
            Welcome Admin 👩‍💻
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#555",
              mb: 4
            }}
          >
            Manage your services, bookings, users and categories from here.
          </Typography>

          {/* ✅ DASHBOARD CARDS */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={5} sx={{ p: 3, borderRadius: "10px" }}>
                <Typography variant="h6" color="#1e3a5f">Users</Typography>
                <Typography variant="body2">View and manage users</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper elevation={5} sx={{ p: 3, borderRadius: "10px" }}>
                <Typography variant="h6" color="#1e3a5f">Services</Typography>
                <Typography variant="body2">Add & manage services</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper elevation={5} sx={{ p: 3, borderRadius: "10px" }}>
                <Typography variant="h6" color="#1e3a5f">Bookings</Typography>
                <Typography variant="body2">Track all bookings</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}