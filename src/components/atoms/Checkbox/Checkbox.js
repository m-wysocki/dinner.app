import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWrapper } from './CheckboxStyles';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
