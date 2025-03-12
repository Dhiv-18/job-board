import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// Custom Navbar Styling
const CustomAppBar = styled(AppBar)({
  background: "linear-gradient(90deg, #FF6B6B, #6B77FF, #6BFFB8)", // Multi-color gradient
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  padding: "5px 20px",
});

const NavButton = styled(Button)({
  fontSize: "16px",
  margin: "0 12px",
  padding: "8px 16px",
  borderRadius: "30px", // Rounded buttons
  color: "#fff",
  background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
  backdropFilter: "blur(10px)", // Glass effect
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "#FFD700", // Gold on hover
    color: "#333",
    transform: "scale(1.1)",
  },
});

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
          🌟 Job Board
        </Typography>
        <Box>
          <NavButton component={Link} to="/">Home</NavButton>
          <NavButton component={Link} to="/jobs">Jobs</NavButton>
          <NavButton component={Link} to="/profile">Profile</NavButton>
          <NavButton component={Link} to="/admin">Admin</NavButton>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
