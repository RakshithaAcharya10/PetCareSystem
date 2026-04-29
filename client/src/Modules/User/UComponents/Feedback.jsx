import { Box, Button, TextField, Typography, Paper, Rating } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeedbackForm() {

  const [form, setForm] = useState({
    fullname: '',
    email: '',
    feedback: '',
    rating: 0
  })

  const navigate = useNavigate()
  const token = localStorage.getItem("UserToken")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:8000/feedback/createFeedback",
        form,
        {
          headers: { "auth-token": token }
        }
      )

      alert("Feedback submitted successfully")
      navigate("/")

    } catch (error) {
      console.log(error)
      alert("Submission failed")
    }
  }

  return (
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
          sx={{ mb: 2, color: "#1e3a5f", fontWeight: "bold" }}
        >
          Feedback Form
        </Typography>

        <TextField
          label="Full Name"
          name="fullname"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          label="Feedback"
          name="feedback"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <Typography sx={{ mb: 1 }}>Rating</Typography>

        <Rating
          name="rating"
          value={form.rating}
          onChange={(event, newValue) => {
            setForm({ ...form, rating: newValue })
          }}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#1e3a5f",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#1e3a5f" }
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Paper>
    </Box>
  )
}