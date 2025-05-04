import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "180px", xs: "60px" },
        ml: { sm: "40px" },
        backgroundColor: "#F4F9FF",
        borderRadius: "12px",
        padding: "30px",

        maxWidth: "700px",
      }}
      position="relative"
    >
      <Typography color="#007BFF" fontWeight={600} fontSize="26px">
        Your Personal Trainer
      </Typography>

      <Typography
        fontWeight={800}
        sx={{ fontSize: { lg: "42px", xs: "36px" }, mt: 1 }}
      >
        Train Smart. <br /> Stay Strong.
      </Typography>

      <Typography fontSize="20px" lineHeight="32px" mt={2} mb={3} color="#555">
        Explore guided tutorials for every fitness level — right from home.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#007BFF",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        Browse Tutorials
      </Button>
    </Box>
  );
};

export default HeroBanner;
