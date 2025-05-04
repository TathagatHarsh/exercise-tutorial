import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function SearchExercises() {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises <br />
        You Should Know
      </Typography>
      <Box>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Seach Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
