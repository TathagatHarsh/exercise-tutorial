import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Nutrition from "./Pages/Nutrition";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Login from "./Pages/Login";
import Favorites from "./Pages/Favorites";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Box>
    </AuthProvider>
  );
};

export default App;
