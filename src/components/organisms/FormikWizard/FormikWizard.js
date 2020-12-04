import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GrFormAdd, GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Form, Formik } from 'formik';
import Button from '../../atoms/Button/Button';

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4rem;
`;
const StyledButton = styled(Button)`
  margin-right: 2rem;
  svg {
    fill: #fff;
    path,
    polyline {
      stroke: #fff;
    }
  }
`;

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
      validationSchema={currentChild.props.validationSchema}
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
        <StyledButtons>
          {step > 0 && (
            <StyledButton
              small
              type="button"
              onClick={() => {
                setStep(step => step - 1);
              }}
            >
              <GrFormPrevious />
              back
            </StyledButton>
          )}
          <StyledButton small type="submit">
            {isLastStep() ? (
              <>
                <GrFormAdd />
                add recipe
              </>
            ) : (
              <>
                next
                <GrFormNext />
              </>
            )}
          </StyledButton>
        </StyledButtons>
      </Form>
    </Formik>
  );
};

export default FormikWizard;

FormikWizard.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
