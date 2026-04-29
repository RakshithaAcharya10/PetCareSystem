import React, { useState, useEffect } from 'react'
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
import { useParams } from 'react-router-dom'
import logo from "../../../assets/logo.png"

export default function UpdateService() {
  const [service, setService] = useState({
    service_name: '',
    service_price: '',
    service_description: '',
    categoryId: '',
    service_image: ''
  })

  const { rowid } = useParams()

  const handlechange = (e) => {
    if (e.target.name === 'service_image') {
      setService({ ...service, service_image: e.target.files[0] })
    } else {
      setService({ ...service, [e.target.name]: e.target.value })
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/service/getservicebyid/${rowid}`)
      .then((res) => {
        setService(res.data.byid)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [rowid])

  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/category/getcategory')
      .then((res) => {
        setCategory(res.data.allcategory)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleUpdate = async () => {
    const servicedata = new FormData()
    servicedata.append('service_name', service.service_name)
    servicedata.append('service_price', service.service_price)
    servicedata.append('service_description', service.service_description)
    servicedata.append('categoryId', service.categoryId)

    if (service.service_image) {
      servicedata.append("service_image", service.service_image)
    }

    try {
      await axios.put(
        `http://localhost:8000/service/updateservice/${rowid}`,
        servicedata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      alert("Service updated successfully")
    } catch (error) {
      console.log(error)
    }
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
        <img src={logo} alt="logo" style={{ width: "300px", height: "150px" }} />

        <Typography
          variant="h3"
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
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: { xs: "90%", sm: "550px" },
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#1e3a8a", fontWeight: "bold" }}
          >
            Update Service
          </Typography>

          <TextField
            label="Service Name"
            name='service_name'
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={service.service_name}
          />

          <TextField
            label="Service Price"
            type='number'
            name='service_price'
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={service.service_price}
          />

          <TextField
            label="Service Description"
            multiline
            rows={3}
            name='service_description'
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
            value={service.service_description}
          />

          {/* ✅ CATEGORY DROPDOWN */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select
              name="categoryId"
              value={service.categoryId}
              onChange={handlechange}
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

          {/* ✅ IMAGE INPUT */}
          <TextField
            type='file'
            InputLabelProps={{ shrink: true }}
            label='Service Image'
            name='service_image'
            fullWidth
            sx={{ mb: 2 }}
            onChange={handlechange}
          />

          {/* ✅ PREVIEW IMAGE */}
          {service.service_image && (
            <img
              src={`http://localhost:8000/image/${service.service_image}`}
              alt="service"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                marginBottom: "15px",
                borderRadius: "10px"
              }}
            />
          )}

          <Button
            fullWidth
            variant='contained'
            sx={{
              backgroundColor: "#1e3a5f",
              padding: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1e40af" }
            }}
            onClick={handleUpdate}
          >
            UPDATE SERVICE
          </Button>
        </Paper>
      </Box>
    </>
  )
}