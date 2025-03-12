import React, { useState } from "react";
import { Container, TextField, Card, CardContent, Typography, Button } from "@mui/material";

const jobData = [
  { title: "Software Engineer", company: "Google", location: "California" },
  { title: "Data Analyst", company: "Microsoft", location: "New York" },
  { title: "Product Manager", company: "Amazon", location: "Seattle" },
];

const JobListings = () => {
  const [search, setSearch] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const saveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  return (
    <Container>
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        sx={{ my: 2 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredJobs.map((job, index) => (
        <Card key={index} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="body2">{job.company} - {job.location}</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => saveJob(job)}>
              Save Job
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default JobListings;
