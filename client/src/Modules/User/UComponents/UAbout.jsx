import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

export default function UAbout() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#a8c3cc", textAlign: "center" }}>

      {/* 🔥 Top Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "28px", md: "40px" },
                color: "#1e3a5f"
              }}
            >
              The Best Pet Groomers in Town
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "18px", color: "#1e3a5f" }}>
              For a pawfect look and feel
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                px: 3,
                py: 1,
                fontSize: "14px",
                bgcolor: "#1e3a5f"
              }}
            >
              Learn More
            </Button>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <img
              src="https://static.wixstatic.com/media/84770f_cc7fbf222d044cf09028f921a0cfe36e~mv2.png"
              alt="pets"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                display: "block"
              }}
            />
          </Grid>

        </Grid>
      </Box>

      {/* 🔥 Features */}
      <Box sx={{ py: 8 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "32px", md: "38px" },
            color: "#1e3a5f"
          }}
        >
          Your pet deserves to be pampered!
        </Typography>

        <Grid
  container
  spacing={3}
  justifyContent="center"
  sx={{ mt: 4 }}
>
  {[
    {
      title: "Grooming",
      desc: "Services focused on pet hygiene and appearance such as bathing, hair trimming, nail clipping, ear cleaning, and overall grooming care."
    },
    {
      title: "Medical",
      desc: "Healthcare services for pets including vaccination, health checkups, diagnostic tests, treatments, and surgical procedures."
    },
    {
      title: "Training",
      desc: "Services designed to improve pet behavior and skills including obedience training, behavior correction, and socialization for dogs and cats."
    }
  ].map((item, i) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={i}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          maxWidth: "300px",
          textAlign: "center",
          borderRadius: 2
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {item.desc}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
      </Box>

      {/* 🔥 About Section */}
      <Box sx={{ maxWidth: "700px", mx: "auto", pb: 8 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: 600 }}>
          Who We Are
        </Typography>

        <Typography sx={{ mt: 2, fontSize: "20px", lineHeight: 1.7 }}>
          We provide professional pet grooming services with love and care.
          Our team ensures your pets feel comfortable, clean, and happy.
        </Typography>

        <Typography sx={{ mt: 2, fontSize: "20px", lineHeight: 1.7 }}>
          From bathing to styling, we offer complete grooming solutions
          designed for your pet’s health and happiness.
        </Typography>
      </Box>

      {/* 🔥 Services Section */}
      <Box sx={{ py: 1 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: 600 }}>
          Our Services
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {["Hair Styling", "Nail Trimming", "Ear Cleaning", "Spa Treatment"].map((service, i) => (
            <Grid item xs={12} sm={4} md={3} key={i}>
              <Paper sx={{ p: 3 }}>
                <Typography fontWeight="600">{service}</Typography>
                <Typography variant="body2">
                  Professional care for your pet
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔥 Why Choose Us */}
      <Box sx={{ py: 8, bgcolor: "#94aeb7" }}>
        <Typography sx={{ fontSize: "35px", fontWeight: 600 }}>
          Why Choose Us?
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {[
            "Experienced Staff",
            "Safe Products",
            "Hygienic Environment"
          ].map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Typography fontWeight="600">{item}</Typography>
              <Typography variant="body2">
                We provide the best care for your pets
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔥 Call To Action */}
      <Box sx={{ py: 8 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: 600 }}>
          Book Your Pet’s Appointment Today!
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Give your pet the care they deserve
        </Typography>
      </Box>

    </Box>
  );
}