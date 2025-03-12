import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5, textAlign: "center" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Profile
        </Typography>
        <TextField label="Full Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="file" accept=".pdf,.docx" onChange={handleResumeUpload} />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
