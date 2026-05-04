import React, { useState, useEffect } from 'react'
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Button
} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function ManageCategory() {
  const [categories, setCategories] = useState([])

  const fetchCategories = () => {
    axios.get('http://localhost:8000/category/getcategory')
      .then((res) => {
        setCategories(res.data.allcategory)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleDelete = (uid) => {
    axios.delete(`http://localhost:8000/category/deletecategory/${uid}`)
      .then(() => {
        alert("Category deleted")
        fetchCategories() 
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

      {/* MAIN CONTENT */}
      <Box
        sx={{
          minHeight: "80vh",
          background: "linear-gradient(to right, #deeef4, #2f829d)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "90%",
            padding: "30px",
            borderRadius: "15px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              color: "#1e3a5f",
              fontWeight: "bold"
            }}
          >
            Manage Categories
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1e3a5f" }}>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize:"18px"}}>SL.NO</TableCell>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize:"18px"}}>CATEGORY NAME</TableCell>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize:"18px"}}>DESCRIPTION</TableCell>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize:"18px"}}>ACTION</TableCell>
                </TableRow>
              </TableHead>

              <TableBody sx={{background: "#c5e9f6"}}>
                {categories.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell align="center" sx={{fontSize: "17px", fontWeight:"bold"}}>{index + 1}</TableCell>
                    <TableCell align="center" sx={{fontSize: "17px", fontWeight:"bold"}}>{row.category_name}</TableCell>
                    <TableCell align="center" sx={{fontSize: "17px", fontWeight:"bold"}}>{row.category_description}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ mr: 1, backgroundColor: "#1e3a5f" }}
                        component={Link}
                        to={`/Admin/UpdateCategory/${row._id}`}
                      >
                        UPDATE
                      </Button>

                      <Button
                        variant="contained"
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
        </Paper>
      </Box>
    </>
  )
}