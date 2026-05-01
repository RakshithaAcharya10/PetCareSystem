import React, { useState } from 'react'
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FAQ() {

  const [faqs] = useState([
    {
      question: "What services does PetGlow Studio offer?",
      answer: "PetGlow Studio provides a wide range of pet care services including bathing, grooming, nail clipping, ear cleaning, teeth cleaning, vaccination, health checkups, training, and surgery services. We ensure complete care for your pets under one roof."
    },
    {
      question: "How can I book a service for my pet?",
      answer: "To book a service, go to the services page, choose the desired service, and click on “Book Now”. Fill in your details and select a convenient time slot. Confirm your booking to complete the process."
    },
    {
      question: "Are your services safe for pets?",
      answer: "Yes, all our services are performed by trained professionals using pet-safe products and equipment. We prioritize your pet’s safety, comfort, and hygiene at all times."
    },
    {
      question: "Do I need to bring anything for my pet’s appointment?",
      answer: "You may bring your pet’s medical records if available. For grooming or general services, no special items are required unless your pet has specific needs."
    },
    {
      question: "How long does a grooming session take?",
      answer: "A typical grooming session takes between 30 minutes to 2 hours depending on the service and the pet’s size, breed, and condition."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule your appointment up to a few hours before the scheduled time. Late cancellations may incur a small fee."
    },
    {
      question: "Do you offer emergency or surgery services?",
      answer: "Yes, we provide basic surgical services and health checkups. For emergencies, we recommend contacting us immediately or visiting the nearest veterinary clinic."
    },
    {
      question: "Are vaccinations available at your center?",
      answer: "Yes, we provide pet vaccination services as per veterinary guidelines. Our team ensures proper handling and care during the process."
    },
    {
      question: "What types of training do you offer?",
      answer: "We offer basic obedience training, puppy & kitten training, and behavior correction training to improve your pet’s discipline and habits."
    },
    {
      question: "How do I make payments?",
      answer: "Payments can be made online or at the center using various methods such as UPI, cards, or cash."
    }
  ])

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #deeef4, #2f829d)",   // same as your About page
        minHeight: "100vh",
        padding: "60px 20px"
      }}
    >

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2d4f73",
          mb: 5
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ Container */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2d4f73" }} />}
              sx={{
                backgroundColor: "#ffffff",
                "&:hover": { backgroundColor: "#f5f5f5" }
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "20px", color:"#2d4f73" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ backgroundColor: "#fafafa" }}>
              <Typography sx={{fontSize: "18px", color: "#333", lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}