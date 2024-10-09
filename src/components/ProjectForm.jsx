import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ProjectForm1 from "./ProjectForm1";
import ProjectForm2 from "./ProjectForm2";
import ProjectForm3 from "./ProjectForm3";
import ProjectForm4 from "./ProjectForm4";

const ProjectForm = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [permissions, setPermissions] = useState("");
  const [showSpecific, setShowSpecific] = useState(false);
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerPerson, setHoursPerPerson] = useState("");
  const [projectType, setProjectType] = useState("time_material");
  const [budgetResetsMonthly, setBudgetResetsMonthly] = useState(false);
  const [budgetAlertPercentage, setBudgetAlertPercentage] = useState(80);
  const [selectedView, setSelectedView] = useState("list");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setProjectName("");
    setClient("");
    setStartDate("");
    setEndDate("");
    setNotes("");
    setPermissions("");
    setStep(0);
    setShowSpecific(false);
    setHourlyRate("");
    setHoursPerPerson("");

    setProjectType("time_material");
    setBudgetResetsMonthly(false);
    setBudgetAlertPercentage(80);
    setSelectedView("list");
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    const projectData = {
      projectName,
      client,
      startDate,
      endDate,
      notes,
      permissions,
      hourlyRate,
      hoursPerPerson,
      projectType,
      budgetResetsMonthly,
      budgetAlertPercentage,
      selectedView,
    };
    localStorage.setItem("projectData", JSON.stringify(projectData));
    console.log(projectData);
    alert("form submit successfully");
    handleClose();
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleOpen}>
        Create Project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {/* Step 1 */}
          {step === 0 && (
            <ProjectForm1
              projectName={projectName}
              client={client}
              startDate={startDate}
              endDate={endDate}
              notes={notes}
              setProjectName={setProjectName}
              setClient={setClient}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setNotes={setNotes}
            />
          )}

          {/* Step 2 */}
          {step === 1 && (
            <ProjectForm2
              hourlyRate={hourlyRate}
              setHourlyRate={setHourlyRate}
              hoursPerPerson={hoursPerPerson}
              setHoursPerPerson={setHoursPerPerson}
              projectType={projectType}
              setProjectType={setProjectType}
              budgetResetsMonthly={budgetResetsMonthly}
              setBudgetResetsMonthly={setBudgetResetsMonthly}
              budgetAlertPercentage={budgetAlertPercentage}
              setBudgetAlertPercentage={setBudgetAlertPercentage}
            />
          )}

          {/* Step 3 */}
          {step === 2 && <ProjectForm3 setViewType={setSelectedView} />}

          {/* Step 4 */}
          {step === 3 && (
            <ProjectForm4
              permissions={permissions}
              setPermissions={setPermissions}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleBack} disabled={step === 0}>
            Back
          </Button>
          <Button onClick={handleNext} variant="contained">
            {step === 3 ? "Submit" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectForm;
