import { Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'

const LinearStepper = () => {
  return (
    <div>
        <Stepper activeStep={0}>
            <Step>
                <StepLabel>Step 1</StepLabel>
            </Step>
            <Step>
                <StepLabel>Step 2</StepLabel>
            </Step>
            <Step>
                <StepLabel>Step 3</StepLabel>
            </Step>
            <Step>
                <StepLabel>Step 4</StepLabel>
            </Step>
        </Stepper>
    </div>
  )
}

export default LinearStepper