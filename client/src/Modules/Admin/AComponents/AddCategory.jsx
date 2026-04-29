import React, { useState } from 'react'
import { Typography, Paper, TextField, Button, Box } from '@mui/material'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function AddCategory() {
  const [category, setcategory] = useState({
    category_name: '',
    category_description: ''
  })

  const handlechange = (e) => {
    setcategory({ ...category, [e.target.name]: e.target.value })
  }

  const handleregister = () => {
    axios.post("http://localhost:8000/category/addcategory", category)
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

      {/* ✅ FORM SECTION */}
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
            Add Category
          </Typography>

          <TextField
            label="Category Name"
            name="category_name"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
          />

          <TextField
            label="Category Description"
            name="category_description"
            multiline
            rows={4}
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
              "&:hover": { backgroundColor: "#1e40af" }
            }}
            onClick={handleregister}
          >
            ADD CATEGORY
          </Button>
        </Paper>
      </Box>
    </>
  )
}