import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px" bgcolor="#007bff" color="#fff" py={3} textAlign="center">
    <Typography
      variant="subtitle1"
      sx={{ fontSize: { lg: "18px", xs: "14px" } }}
    >
      Empowering Your Fitness Journey with Expert Guidance. &copy; FitGuide{" "}
      {new Date().getFullYear()}
    </Typography>
  </Box>
);

export default Footer;
