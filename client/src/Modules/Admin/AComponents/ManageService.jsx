import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function ManageService() {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/service/getservice')
      .then((res) => {
        setServices(res.data.allservices)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = (uid) => {
    axios.delete(`http://localhost:8000/service/deleteservice/${uid}`)
      .then(() => {
        alert("Service deleted")
        setServices((prev) => prev.filter(s => s._id !== uid))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {/* HEADER */}
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

      {/* MAIN */}
      <Box
        sx={{
          minHeight: "90vh",
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
          padding: "30px"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
            color: "#1e3a5f",
            fontWeight: "bold"
          }}
        >
          Manage Services
        </Typography>

        <TableContainer component={Paper} sx={{ borderRadius: "15px", boxShadow: 5 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1e3a5f" }}>
                {["SL.NO", "SERVICE NAME", "PRICE", "DESCRIPTION", "CATEGORY", "IMAGE", "ACTION"]
                  .map((head) => (
                    <TableCell key={head} align="center" sx={{ color: "white", fontWeight: "bold" }}>
                      {head}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {services.map((row, index) => (
                <TableRow key={row._id} hover>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.service_name}</TableCell>
                  <TableCell align="center">₹{row.service_price}</TableCell>
                  <TableCell align="center">{row.service_description}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>

                  {/* ✅ UPDATED IMAGE SIZE */}
                  <TableCell align="center">
                    <img
                      src={`http://localhost:8000/image/${row.service_image}`}
                      alt=""
                      style={{
                        width: "200px",       // 🔥 increased
                        height: "200px",      // 🔥 increased
                        borderRadius: "12px",
                        objectFit: "cover",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                      }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1e3a5f",
                        mr: 1,
                        "&:hover": { backgroundColor: "#1e40af" }
                      }}
                      component={Link}
                      to={`/Admin/UpdateService/${row._id}`}
                    >
                      UPDATE
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(row._id)}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </>
  )
}