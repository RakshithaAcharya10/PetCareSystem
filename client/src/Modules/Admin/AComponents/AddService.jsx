import React, { useEffect, useState } from 'react'
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  FormControl,
  MenuItem,
  Select
} from '@mui/material'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function AddService() {
  const [service, setService] = useState({
    service_name: '',
    service_price: '',
    service_description: '',
    categoryId: '',
    service_image: ''
  })

  const [category, setcategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/category/getcategory')
      .then((res) => {
        setcategory(res.data.allcategory)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handlechange = (e) => {
    if (e.target.name === 'service_image') {
      setService({ ...service, service_image: e.target.files[0] })
    } else {
      setService({ ...service, [e.target.name]: e.target.value })
    }
  }

  const handleregister = () => {
    axios.post(
      "http://localhost:8000/service/addservice",
      service,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
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

      {/* ✅ FORM */}
      <Box
        sx={{
          minHeight: "80vh",
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
            Add New Service
          </Typography>

          <TextField
            label="Service Name"
            name="service_name"
            fullWidth
            sx={{ mb: 2, backgroundColor:"#e7f5f9"}}
            onChange={handlechange}
          />

          <TextField
            label="Service Price"
            name="service_price"
            type="number"
            fullWidth
            sx={{ mb: 2, backgroundColor:"#e7f5f9" }}
            onChange={handlechange}
          />

          <TextField
            label="Service Description"
            name="service_description"
            multiline
            rows={3}
            fullWidth
            sx={{ mb: 2, backgroundColor:"#e7f5f9" }}
            onChange={handlechange}
          />

          <TextField
            type="file"
            name="service_image"
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 2, backgroundColor:"#e7f5f9" }}
            onChange={handlechange}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select
              name="categoryId"
              value={service.categoryId}
              onChange={handlechange}
              sx={{ mb: 2, backgroundColor:"#e7f5f9" }}
              displayEmpty
            >
              <MenuItem value="">Select Category</MenuItem>
              {category.map((cat) => (
                <MenuItem key={cat._id} value={cat._id}>
                  {cat.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
            ADD SERVICE
          </Button>
        </Paper>
      </Box>
    </>
  )
}