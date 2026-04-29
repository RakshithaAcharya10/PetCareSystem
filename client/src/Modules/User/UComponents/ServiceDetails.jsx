import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

export default function ServiceDetails() {
  const { id } = useParams();   
  const [service, setService] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/service/getservicebyid/${id}`)
      .then((res) => {
        console.log(res.data.byid);
        setService(res.data.byid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!service) return <h2>Loading...</h2>;

return (
  <Paper
    sx={{
      padding: "40px",
      margin: "20px",
      display: "flex",
      gap: "50px",
      width: "90%",
      marginX: "auto",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >
    {/* 🔹 LEFT SIDE - IMAGE (50%) */}
    <div style={{ flex: 1 }}>
      <img
  src={`http://localhost:8000/image/${service.service_image}`}
  alt=""
  style={{
    width: "100%",
    height: "400px",
    objectFit: "contain",   
    borderRadius: "10px",
    background: "#f5f5f5"   
  }}
/>
    </div>

    {/* 🔹 RIGHT SIDE - DETAILS (50%) */}
    <div style={{ flex: 1 }}>
      <Typography variant="h3" gutterBottom>
        {service.service_name}
      </Typography>

      <Typography variant="h4" color="green" gutterBottom>
        ₹ {service.service_price}
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom>
        {service.service_description}
      </Typography>

      <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
        <button style={{
          padding: "12px 25px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Add to Cart
        </button>

        <button style={{
          padding: "12px 25px",
          background: "orange",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={()=>navigate(`/booking/${service._id}`)}>
          Buy Now
        </button>
      </div>
    </div>
  </Paper>
);

}