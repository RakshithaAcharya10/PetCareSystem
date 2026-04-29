import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Box, Typography
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import logo from "../../../assets/logo.png"

export default function ViewBooking() {
  const [booking, setBooking] = useState([])
  const [selectedbooking, setSelectedbooking] = useState(null)
  const [status, setStatus] = useState("")
  const [open, setOpen] = useState(false)

  const fetchbooking = () => {
    axios.get("http://localhost:8000/booking/getAllbooking")
      .then((res) => {
        setBooking(res.data.bdata)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchbooking()
  }, [])

  const handlechangestatus = (booking, status) => {
    setSelectedbooking(booking)
    setStatus(status)
    setOpen(true)
  }

  const handleconfirm = async () => {
    try {
      await axios.put(
        `http://localhost:8000/booking/updateStatus/${selectedbooking._id}`,
        { newstatus: status }
      )
      fetchbooking()
      setOpen(false)
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

      {/* ✅ MAIN CONTENT */}
      <Box
        sx={{
          minHeight: "90vh",
          background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            padding: 3,
            borderRadius: "15px"
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, color: "#1e3a5f", fontWeight: "bold", textAlign: "center" }}
          >
            Manage Bookings
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#e0f2fe" }}>
                  <TableCell><b>SL.NO</b></TableCell>
                  <TableCell><b>NAME</b></TableCell>
                  <TableCell><b>ADDRESS</b></TableCell>
                  <TableCell><b>SERVICE</b></TableCell>
                  <TableCell><b>STATUS</b></TableCell>
                  <TableCell><b>ACTION</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {booking.map((b, index) => (
                  <TableRow key={b._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{b.fullname}</TableCell>
                    <TableCell>{b.address}</TableCell>
                    <TableCell>{b.serviceID?.service_name}</TableCell>
                    <TableCell>{b.bookingstatus}</TableCell>
                    <TableCell>
                      <Select
                        size="small"
                        value={b.bookingstatus}
                        onChange={(e) => handlechangestatus(b, e.target.value)}
                      >
                        <MenuItem value="Pending">PENDING</MenuItem>
                        <MenuItem value="Approved">APPROVED</MenuItem>
                        <MenuItem value="Rejected">REJECTED</MenuItem>
                        <MenuItem value="Completed">COMPLETED</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* ✅ DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Status Update</DialogTitle>
        <DialogContent>
          Are you sure you want to change the status to <b>{status}</b>?
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleconfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}