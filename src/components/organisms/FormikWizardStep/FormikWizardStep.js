import React from 'react';
import PropTypes from 'prop-types';

const FormikWizardStep = ({ children }) => {
  return <div>{children}</div>;
};

export default FormikWizardStep;

FormikWizardStep.propTypes = {
  children: PropTypes.node.isRequired,
};
