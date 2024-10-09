import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const ProjectForm3 = ({ setViewType }) => {
  const [selectedView, setSelectedView] = useState("list");

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewType(selectedView);
  };

  useEffect(() => {
    localStorage.setItem("selectedView", selectedView);
  }, [selectedView]);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Select a View
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Choose a view type for your project management.
        </Typography>
      </DialogTitle>

      <FormControl component="fieldset">
        <RadioGroup
          value={selectedView}
          onChange={(e) => setSelectedView(e.target.value)}
        >
          <FormControlLabel value="list" control={<Radio />} label="List" />
          <FormControlLabel value="board" control={<Radio />} label="Board" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ProjectForm3;
