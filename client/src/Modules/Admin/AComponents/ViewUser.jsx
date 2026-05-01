import React, { useEffect, useState } from 'react'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, Typography
} from '@mui/material'
import axios from 'axios'
import logo from "../../../assets/logo.png"

export default function ViewUser() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/user/getuser')
      .then((res) => {
        console.log(res.data.allusers)
        setUsers(res.data.allusers)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const HandleDelete = (uid) => {
    axios.delete(`http://localhost:8000/user/deleteuser/${uid}`)
      .then((res) => {
        console.log(res)
        alert("user deleted")
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
        <img src={logo} alt="logo" style={{ width: "200px" }} />

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

      {/* ✅ MAIN CONTENT */}
      <Box
        sx={{
          minHeight: "80vh",
          background: "linear-gradient(to right, #deeef4, #2f829d)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "90%",
            padding: "20px",
            borderRadius: "15px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: "#1e3a5f",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            User Management
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1e3a5f"  }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>SL.NO</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>NAME</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>EMAIL</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>PHONE</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>ADDRESS</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "18px"}}>ACTION</TableCell>
                </TableRow>
              </TableHead>

              <TableBody sx={{background: "#c5e9f6"}}>
                {users.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell sx={{fontSize: "17px", fontWeight:"bold"}}>{index + 1}</TableCell>
                    <TableCell sx={{fontSize: "17px", fontWeight:"bold"}}>{row.name}</TableCell>
                    <TableCell sx={{fontSize: "17px", fontWeight:"bold"}}>{row.email}</TableCell>
                    <TableCell sx={{fontSize: "17px", fontWeight:"bold"}}>{row.phone}</TableCell>
                    <TableCell sx={{fontSize: "17px", fontWeight:"bold"}}>{row.address}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => HandleDelete(row._id)}
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