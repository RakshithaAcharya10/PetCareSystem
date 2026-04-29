import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Box, Typography,
  Rating
} from '@mui/material'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import logo from "../../../assets/logo.png"

export default function ViewFeedback() {
  const [feedback, setFeedback] = useState([])

  const fetchfeedback = () => {
    axios.get("http://localhost:8000/feedback/getAllFeedbacks")
      .then((res) => {
        setFeedback(res.data.fdata)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchfeedback()
  }, [])

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

      {/* ✅ MAIN CONTENT (FIXED SPACING) */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",   // 🔥 move content to top
          paddingTop: "30px",         // 🔥 small gap from header
          paddingBottom: "20px"
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: "1500px",
            padding: 3,
            borderRadius: "15px"
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, color: "#1e3a5f", fontWeight: "bold", textAlign: "center" }}
          >
            Feedbacks
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1e3a5f" }}>
                  <TableCell sx={{ color: "white" }}><b>SL.NO</b></TableCell>
                  <TableCell sx={{ color: "white" }}><b>NAME</b></TableCell>
                  <TableCell sx={{ color: "white" }}><b>FEEDBACK</b></TableCell>
                  <TableCell sx={{ color: "white" }}><b>RATING</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {feedback.map((b, index) => (
                  <TableRow key={b._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{b.fullname}</TableCell>
                    <TableCell>{b.feedback}</TableCell>

                    {/* ⭐ STAR RATING */}
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Rating value={b.rating} precision={1} readOnly />
                        <Typography variant="body2">({b.rating})</Typography>
                      </Box>
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