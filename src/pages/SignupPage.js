import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";

const SignupPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10, textAlign: "center" }}>
        <Typography variant="h4" color="secondary" gutterBottom>
          Create an Account
        </Typography>
        <TextField label="Full Name" fullWidth margin="normal" variant="outlined" />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
        <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
        <Typography variant="body2" mt={2}>
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignupPage;
