import React, { useRef } from "react";
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PersonalInfo from "../forms/personalInfoForm";
import PhotoSetup from "../forms/photoSetup";

const steps = [
  "Account Settings",
  "Setup Picture",
  "Requirements",
  "Application Form",
  "Finish Setup",
];

function getStepContent(step, refFrom, setActiveStep, activeStep) {
  switch (step) {
    case 0:
      return (
        <PersonalInfo
          reference={refFrom}
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
      );
    case 1:
      return <PhotoSetup />;
    default:
      throw new Error("Unknown step");
  }
}

const Steppers = () => {
  const [activeStep, setActiveStep] = useState(0);

  const refFrom = useRef();

  const handleNext = () => {
    refFrom.current.submitForm();
    // if (!formErrors) {
    //   setActiveStep(activeStep + 1);
    // }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep, refFrom, setActiveStep, activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1
                  ? "Go to My Applications"
                  : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
};

export default Steppers;
