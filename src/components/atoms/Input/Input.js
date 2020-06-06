import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, InputWrapper, InputBar, StyledInput } from './InputStyles';

const Input = React.forwardRef(({ className, label, ...rest }, ref) => {
  return (
    <InputWrapper className={className}>
      <StyledInput {...rest} placeholder="&nbsp;" ref={ref} />
      <InputLabel>{label}</InputLabel>
      <InputBar />
    </InputWrapper>
  );
});

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: null,
};
