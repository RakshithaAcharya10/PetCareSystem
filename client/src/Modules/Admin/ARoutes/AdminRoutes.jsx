import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import ViewUser from '../AComponents/ViewUser'
import Sidebar from '../AComponents/Sidebar'
import AddService from '../AComponents/AddService'
import ManageService from '../AComponents/ManageService'
import ALogin from '../AComponents/ALogin'
import UpdateService from '../AComponents/UpdateService'
import AddCategory from '../AComponents/AddCategory'
import ManageCategory from '../AComponents/ManageCategory'
import UpdateCategory from '../AComponents/UpdateCategory'
import ViewBooking from '../AComponents/ViewBooking'
import ManageUser from '../AComponents/ManageUser'
import ViewFeedback from '../AComponents/ViewFeedback'

export default function AdminRoute() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<AHome/>}/>
        <Route path='/ALogin' element={<ALogin/>}/>
        <Route path='/ViewUser' element={<ViewUser/>}/>
        <Route path='/ManageUser' element={<ManageUser/>}/>
        <Route path='/AddService' element={<AddService/>}/>
        <Route path='/AddCategory' element={<AddCategory/>}/>
        <Route path='/UpdateCategory/:rowid' element={<UpdateCategory/>}/>
        <Route path='/ManageCategory' element={<ManageCategory/>}/>
        <Route path='/ViewBooking' element={<ViewBooking/>}/>
        <Route path='/ViewFeedback' element={<ViewFeedback/>}/>
        <Route path='/ManageService' element={<ManageService/>}/>
        <Route path='/UpdateService/:rowid' element={<UpdateService/>}/>
      </Routes>
    </div>
  )
}