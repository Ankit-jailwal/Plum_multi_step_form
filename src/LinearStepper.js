import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import "./LinearStepper.css";
import { makeStyles } from "@material-ui/core/styles";
import AmountSlider from "./AmountSlider";
import Declaration from "./Declaration";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <div className="flexbox-container">
            <TextField
              id="email"
              label="Personal email address"
              variant="outlined"
              placeholder="Enter"
              fullWidth
              margin="normal"
              name="emailAddress"
            />
            <TextField
              id="mobile"
              label="Mobile number"
              variant="outlined"
              placeholder="Enter"
              fullWidth
              margin="normal"
              name="mobile"
            />
          </div>
          <div className="flexbox-container">
          <TextField
            id="address01"
            variant="outlined"
            placeholder="Enter"
            fullWidth
            margin="normal"
            name="address01"
          />
          <TextField
            id="address02"
            label="Address line 02"
            variant="outlined"
            placeholder="Enter"
            fullWidth
            margin="normal"
            name="address02"
          />
          </div>
          <div className="flexbox-container">
          <TextField
            id="pincode"
            label="Pincode"
            variant="outlined"
            placeholder="Enter"
            fullWidth
            margin="normal"
            name="pincode"
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter"
            fullWidth
            margin="normal"
            name="state "
          />
          </div>
        </>
      );

    case 1:
      return (
        <>
          <AmountSlider/>
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
      );
    case 3:
      return (
        <>
          <Declaration/>
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
