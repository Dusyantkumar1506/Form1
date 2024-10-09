import React from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  DialogTitle,
  Typography,
} from "@mui/material";

const FormStep1 = ({
  projectName,
  client,
  startDate,
  endDate,
  notes,
  setProjectName,
  setClient,
  setStartDate,
  setEndDate,
  setNotes,
}) => (
  <>
    <DialogTitle
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Create a Project
      </Typography>
    </DialogTitle>

    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box>
        <label>Project Name</label>
        <TextField
          placeholder="Project Name"
          variant="outlined"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          fullWidth
        />
      </Box>
      <Box>
        <label>Client</label>
        <FormControl fullWidth>
          <Select
            value={client}
            onChange={(e) => setClient(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select a client</MenuItem>
            <MenuItem value="new">New Client</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <label>Start Date</label>
          <TextField
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <label>End Date</label>
          <TextField
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
          />
        </Box>
      </Box>
      <Box>
        <label>Notes</label>
        <TextField
          placeholder="Notes"
          multiline
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Box>
    </Box>
  </>
);

export default FormStep1;
