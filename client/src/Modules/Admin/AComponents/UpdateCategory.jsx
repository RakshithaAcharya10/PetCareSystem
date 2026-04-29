import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateCategory() {
  const [category, setcategory] = useState({
    category_name:'',
    category_description:''
  })

  const{rowid} = useParams();
  const handlechange = (e)=>{
    console.log({...category,[e.target.name]:e.target.value})
    setcategory({...category,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/category/Getcategorybyid/${rowid}`)
    .then((res)=>{
      console.log(res.data.cdata)
      setcategory(res.data.cdata)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const handleUpdate = async ()=>{
    const categorydata = new FormData()
    categorydata.append('category_name',category.category_name)
    categorydata.append('category_description',category.category_description)

    try {
      await axios.put(`http://localhost:8000/category/updatecategory/${rowid}`,category)
      alert("Category Updated")

    } catch (error) {
     console.log(error) 
    }

  }

  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>Update Category</Typography>
        <TextField variant='outlined' type='text' label='CNAME' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={category.category_name}/>
        <TextField variant='outlined' multiline rows={5} label='CDESCRIPTION' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={category.category_description}/>
        <Button variant='contained' fullWidth  onClick={handleUpdate}>Update Category</Button>
      </Paper>
    </div>
  )
}