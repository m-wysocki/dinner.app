import React from 'react';
import PropTypes from 'prop-types';
import * as S from './RadioButton.styles';

const RadioButton = ({ id, label, checked }) => {
  return (
    <S.Label htmlFor={id}>
      <S.Input id={id} type="radio" name="radios" defaultChecked={checked} />
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
  checked: PropTypes.bool,
};
RadioButton.defaultProps = {
  checked: false,
};
