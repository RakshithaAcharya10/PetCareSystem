import React from 'react'
import { BrowserRouter,Routes, Route, useLocation } from 'react-router-dom'
import UserRoute from './Modules/User/URoutes/UserRoute'
import AdminRoute from './Modules/Admin/ARoutes/AdminRoutes'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoute/>}/>
        <Route path='/Admin/*' element={<AdminRoute/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}