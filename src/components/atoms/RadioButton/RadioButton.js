import React from 'react';
import PropTypes from 'prop-types';
import * as S from './RadioButton.styles';

const RadioButton = ({ field: { name, value, onChange, onBlur }, id, label, ...props }) => {
  return (
    <S.Label htmlFor={id}>
      <S.Input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <S.Outer>
        <S.Inner />
      </S.Outer>
      {label}
    </S.Label>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])),
};
