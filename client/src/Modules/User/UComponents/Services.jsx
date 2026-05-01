import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

export default function Services() {

  const navigate = useNavigate();

  const [service, setService] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState("All");

  //Fetch Services
  useEffect(() => {
    axios.get('http://localhost:8000/service/getservice')
      .then((res) => {
        setService(res.data.allservices);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Fetch Categories
  useEffect(() => {
    axios.get('http://localhost:8000/category/getcategory')
      .then((res) => {
        setCategories(res.data.allcategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter Services
  const filteredservices =
    selectedcategory === "All"
      ? service
      : service.filter((pro) => pro.categoryId === selectedcategory);
  
  return (
    <div style={{
      marginTop: "30px", padding: "10px", background: "linear-gradient(to right, #deeef4, #2f829d)",
      padding: "40px 20px"
    }}>

      <FormControl
        fullWidth
        sx={{
          mb: 4,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <InputLabel sx={{ fontSize: '25px', color: "#2d4f73" , fontWeight:"bold" }}>
          Category
        </InputLabel>
        <Select sx={{fontSize:'18px', fontWeight:"bold"}}
          label="Category"
          value={selectedcategory}
          onChange={(e) => setSelectedcategory(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat._id} sx={{fontSize:'18px', fontWeight:"bold"}} value={cat._id}>
              {cat.category_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredservices.map((sdata) => (
          <Card
            key={sdata._id}
            sx={{
              borderRadius: "8px", padding: "20px",
              overflow: "hidden",
              boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
              }
            }}
          >

            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#2d4f73" }}>
                  {sdata.service_name[0]}
                </Avatar>
              }
              action={
                <IconButton onClick={(e) => e.stopPropagation()}>
                  <MoreVertIcon />
                </IconButton>
              }
              title={sdata.service_name}
            // subheader="Product"
            />

            <CardMedia
              component="img"
              image={`http://localhost:8000/image/${sdata.service_image}`}
              alt={sdata.service_name}
              sx={{
                height: 180,
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px"
              }}
              onClick={() => navigate(`/service/${sdata._id}`)}
            />

            <CardContent>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#2d4f73" }}
              >
                Price:{sdata.service_price}
              </Typography>
            </CardContent>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2d4f73",
                padding: "10px",
                borderRadius: "10px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#1f3a57"
                }
              }}
              onClick={() => navigate(`/Bookingform/${sdata._id}`)}
            >
              BOOK NOW
            </Button>

          </Card>
        ))}
      </div>
    </div>
  );
}