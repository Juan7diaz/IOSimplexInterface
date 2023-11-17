import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
function StepperDefault({cant, setActiveStep, activeStep}) {

  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
    <div className="w-full py-4 px-8">
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          {"<"}
        </Button>
        <Stepper
          className="mx-2"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          >
          { [...Array(cant)].map((_, i) => (
            <Step key={i}>{i == 0 ? "m" : i}</Step>
            ))
          }

        </Stepper>
        <Button onClick={handleNext} disabled={isLastStep}>
        {">"}
        </Button>
      </div>
    </div>
    </>
  );
}

export default StepperDefault;
