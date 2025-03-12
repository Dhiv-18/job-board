import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";

const AdminPanel = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5, textAlign: "center" }}>
        <Typography variant="h4" color="secondary" gutterBottom>
          Admin Panel
        </Typography>
        <Typography variant="body1">Approve or Reject Job Posts</Typography>
        <Button variant="contained" color="success" sx={{ m: 2 }}>
          Approve
        </Button>
        <Button variant="contained" color="error">
          Reject
        </Button>
      </Paper>
    </Container>
  );
};

export default AdminPanel;
