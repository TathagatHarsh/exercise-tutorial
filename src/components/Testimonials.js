import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";

const testimonials = [
  {
    name: "Riya S.",
    comment:
      "This app completely changed how I approach workouts. It's like having a personal trainer in my pocket.",
  },
  {
    name: "Aman T.",
    comment:
      "The ability to search exercises by body part is super helpful. Love the clean layout too!",
  },
  {
    name: "Nina K.",
    comment:
      "I use FitGuide daily to plan my workouts. It's simple, powerful, and just what I needed!",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, px: 2, background: "#f3f4f6" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        What Our Users Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                p: 3,
                borderRadius: "20px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <Stack spacing={2} alignItems="center">
                <Avatar
                  alt={testimonial.name}
                  src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/6734880ba96b6a001dd0608e.png" // You can put profile URLs here later
                  sx={{ width: 70, height: 70 }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", color: "#555" }}
                >
                  "{testimonial.comment}"
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  — {testimonial.name}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
