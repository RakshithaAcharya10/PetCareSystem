import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Register from '../UComponents/Register'
import Login from '../UComponents/Login'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import UHome from '../UComponents/UHome'
import Services from '../UComponents/Services'
import FAQ from '../UComponents/FAQ'
import Myprofile from '../UComponents/Myprofile'
import Bookingform from '../UComponents/Bookingform'
import Trackstatus from '../UComponents/Trackstatus'
import Feedback from '../UComponents/Feedback'
import ServiceDetails from '../UComponents/ServiceDetails'

function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/", "/Login"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname)&&<TopBar/>}
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/UAbout' element={<UAbout />} />
        <Route path='/UHome' element={<UHome />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Service/:id' element={<ServiceDetails />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Myprofile' element={<Myprofile />} />
        <Route path='/Trackstatus' element={<Trackstatus />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/Bookingform/:serviceID' element={<Bookingform />} />
      </Routes>
    </div>
  )
}
export default function UserRoute() {
  return (
    <div>
<AppContent/>

    </div>
  )
}