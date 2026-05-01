import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UAbout() {
  const navigate = useNavigate()

  return (
    <Box sx={{ background: "linear-gradient(to right, #deeef4, #2f829d)" }}>

      {/* 🔥 HERO SECTION */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
        <Grid container spacing={4} alignItems="center">

          {/* LEFT TEXT */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: "bold",
                color: "#1e3a5f"
              }}
            >
              The Best Pet Groomers in Town 🐾
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "18px", color: "#555" }}>
              Give your pets the love, care, and grooming they deserve.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "8px",
                bgcolor: "#1e3a5f"
              }}
              onClick={() => navigate("/Services")}
            >
              Explore Services
            </Button>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <img
              src="https://static.wixstatic.com/media/84770f_cc7fbf222d044cf09028f921a0cfe36e~mv2.png"
              alt="pets"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </Grid>

        </Grid>
      </Box>
      
      {/* 🔥 ABOUT SECTION */}
      <Box sx={{ py: 10, bgcolor: "#e8f1f5", textAlign: "center" }}>
        <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
          Who We Are
        </Typography>

        <Typography sx={{ mt: 3, maxWidth: "700px", mx: "auto", color: "#444" }}>
          We provide professional pet grooming services with love and care.
          Our expert team ensures your pets feel clean, comfortable, and happy.
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: "700px", mx: "auto", color: "#444" }}>
          From bathing to styling, we offer complete grooming solutions tailored
          to your pet’s health and happiness.
        </Typography>
      </Box>

    <Box sx={{ py: 10, textAlign: "center" }}>
  <Typography sx={{ fontSize: "36px", fontWeight: "bold", mb: 6 }}>
    Why Choose Us?
  </Typography>

  {/* 🔥 FLEX CONTAINER */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",   // ✅ CENTER EVERYTHING
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap"            // ✅ responsive
    }}
  >
    {[
      { title: "Experienced Staff", icon: "👩‍⚕️" },
      { title: "Safe Products", icon: "🧴" },
      { title: "Hygienic Environment", icon: "🧼" }
    ].map((item, i) => (
      <Paper
        key={i}
        sx={{
          p: 4,
          width: "220px",
          textAlign: "center",
          borderRadius: "12px",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
          }
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>
          {item.icon}
        </Typography>

        <Typography fontWeight="bold" sx={{ mt: 2 }}>
          {item.title}
        </Typography>
      </Paper>
    ))}
  </Box>
</Box>

      {/* 🔥 CTA SECTION */}
      <Box sx={{ py: 10, bgcolor: "#1e3a5f", color: "white", textAlign: "center" }}>
        <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
          Book Your Pet’s Appointment Today!
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Give your pet the care they deserve
        </Typography>
      </Box>

    </Box>
  );
}