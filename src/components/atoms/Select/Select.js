import React from 'react';
import styled from 'styled-components';

const Bar = styled.span`
  position: relative;
  display: block;
  width: 350px;
  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #4cb8ed;
    transition: 0.2s ease all;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
`;

const Label = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
`;

const StyledSelect = styled.select`
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 350px;
  padding: 10px 10px 10px 0;
  font-size: 16px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #d5d5d5;
  cursor: pointer;
  &:focus,
  &:valid {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    & ~ ${Bar}::before, & ~ ${Bar}::after {
      width: 50%;
    }
    & ~ ${Label} {
      color: #039be5;
      top: -20px;
      transition: 0.2s ease all;
      font-size: 12px;
      font-weight: ${({ theme }) => theme.medium};
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 350px;
  &::after {
    position: absolute;
    top: 18px;
    right: 10px;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
  ${StyledSelect} {
    appearance: none;
    -webkit-appearance: none;
  }
`;

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Select = ({ label, name, value, firstOption, items, onChangeFn }) => {
  return (
    <Wrapper>
      <StyledSelect name={name} value={value} onChange={onChangeFn} required>
        {items &&
          items.map(({ id, name, isDisabled }) => (
            <option key={id} value={id} disabled={isDisabled}>
              {name}
            </option>
          ))}
      </StyledSelect>
      <Highlight />
      <Bar />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Select;
