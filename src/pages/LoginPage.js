import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10, textAlign: "center" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Welcome Back!
        </Typography>
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
        <Typography variant="body2" mt={2}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
