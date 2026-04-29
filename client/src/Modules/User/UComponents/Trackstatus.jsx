import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Trackstatus() {
  const [booking, setBooking] = useState([])

  const utoken = localStorage.getItem('UserToken')
  const navigate =useNavigate()
  console.log("usertoken", utoken)

  if(!utoken){
    alert("Please login to view oreder status")
    navigate("/Login")
  }
  const fetchbooking = () => {
    axios.get("http://localhost:8000/booking/getuserbookings",{headers:{"Content-Type":"application/json","auth-token":utoken}})
      .then((res) => {
        console.log(res.data.bdata)
        setBooking(res.data.bdata)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchbooking()
  }, [])


  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL.NO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>ADDRESS</TableCell>
              <TableCell>PRODUCT</TableCell>
              <TableCell>BOOKING STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.map((b, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{b.fullname}</TableCell>
                <TableCell>{b.address}</TableCell>
                <TableCell>{b.serviceID?.service_name}</TableCell>
                <TableCell>{b.bookingstatus}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
