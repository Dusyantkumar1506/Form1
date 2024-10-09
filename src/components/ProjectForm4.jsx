import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  DialogTitle,
} from "@mui/material";

const ProjectForm4 = ({ permissions, setPermissions }) => {
  const [selectedValue, setSelectedValue] = useState(() => {
    return localStorage.getItem("projectPermissions") || "admin";
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setPermissions(value);
    localStorage.setItem("projectPermissions", value); 
  };

  useEffect(() => {
    const storedPermissions = localStorage.getItem("projectPermissions");
    if (storedPermissions) {
      setSelectedValue(storedPermissions);
      setPermissions(storedPermissions);
    }
  }, [setPermissions]);

  return (
    <Box sx={{ mt: 2 }}>
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
          Who can manage projects
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Don't panic - You can also customize these permissions in settings.
        </Typography>
      </DialogTitle>

      <RadioGroup
        value={selectedValue}
        onChange={handleChange}
        name="permissions"
      >
        <FormControlLabel
          value="everyone"
          control={<Radio />}
          label="Everyone"
        />
        <Typography variant="body2" sx={{ ml: 5 }}>
          All users can now see it, but guests cannot access the projects.
        </Typography>

        <FormControlLabel
          value="admin"
          control={<Radio />}
          label="Only Admins"
        />
        <Typography variant="body2" sx={{ ml: 5 }}>
          Only admins can manage everything.
        </Typography>

        <FormControlLabel
          value="specific"
          control={<Radio />}
          label="Only Specific People"
        />
        <Typography variant="body2" sx={{ ml: 5 }}>
          Only specific people can see it.
        </Typography>
      </RadioGroup>
    </Box>
  );
};

export default ProjectForm4;
