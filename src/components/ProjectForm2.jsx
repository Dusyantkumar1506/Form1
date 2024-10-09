import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";

const ProjectForm2 = ({
  hourlyRate,
  setHourlyRate,
  hoursPerPerson,
  setHoursPerPerson,
  projectType,
  setProjectType,
  budgetResetsMonthly,
  setBudgetResetsMonthly,
  budgetAlertPercentage,
  setBudgetAlertPercentage,
}) => {
  useEffect(() => {
    const projectData = {
      hourlyRate,
      hoursPerPerson,
      projectType,
      budgetResetsMonthly,
      budgetAlertPercentage,
    };
    localStorage.setItem("projectData", JSON.stringify(projectData));
  }, [
    hourlyRate,
    hoursPerPerson,
    projectType,
    budgetResetsMonthly,
    budgetAlertPercentage,
  ]);

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
          Project Type
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Don't panic — You can customize these types in settings.
        </Typography>
      </DialogTitle>
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Project Type</FormLabel>
        <RadioGroup
          row
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <FormControlLabel
            value="time_material"
            control={<Radio />}
            label="Time & Material"
          />
          <FormControlLabel
            value="fixed_fee"
            control={<Radio />}
            label="Fixed Fee"
          />
          <FormControlLabel
            value="non_billable"
            control={<Radio />}
            label="Non-Billable"
          />
        </RadioGroup>
      </FormControl>

      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Hourly Rate
      </Typography>
      <Typography variant="body2" color="textSecondary">
        We need hourly rates to track your project’s billable amount.
      </Typography>

      <TextField
        select
        label="Select Hourly Rate"
        fullWidth
        margin="normal"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
      >
        <MenuItem value="12678.00">₹ 12,678.00</MenuItem>
        <MenuItem value="15000.00">₹ 15,000.00</MenuItem>
        <MenuItem value="18000.00">₹ 18,000.00</MenuItem>
      </TextField>

      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Budget
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Specify how many hours are allocated for this project.
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          select
          label="Hours per Person"
          fullWidth
          margin="normal"
          value={hoursPerPerson}
          onChange={(e) => setHoursPerPerson(e.target.value)}
          sx={{ flex: 1 }}
        >
          <MenuItem value="1">1 Hour</MenuItem>
          <MenuItem value="2">2 Hours</MenuItem>
          <MenuItem value="3">3 Hours</MenuItem>
        </TextField>
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={budgetResetsMonthly}
            onChange={(e) => setBudgetResetsMonthly(e.target.checked)}
          />
        }
        label="Budget resets every month"
        sx={{ mb: 1 }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            onChange={(e) =>
              setBudgetAlertPercentage(e.target.checked ? 80 : "")
            }
          />
        }
        label={`Send email alerts if project exceeds ${budgetAlertPercentage}% of budget`}
      />
    </Box>
  );
};

export default ProjectForm2;
