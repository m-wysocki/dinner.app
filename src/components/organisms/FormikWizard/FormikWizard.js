import React, { useState } from 'react';
import { Form, Formik } from 'formik';

const FormikWizard = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      onSubmit={(values, helpers) => {
        if (isLastStep()) {
          props.onSubmit(values, helpers);
        } else {
          setStep(step => step + 1);
        }
      }}
    >
      <Form>
        {currentChild}
        {step > 0 && (
          <button
            type="button"
            onClick={() => {
              setStep(step => step - 1);
            }}
          >
            wstecz
          </button>
        )}
        <button type="submit">{isLastStep() ? 'dodaj' : 'dalej'}</button>
      </Form>
    </Formik>
  );
};

export default FormikWizard;
