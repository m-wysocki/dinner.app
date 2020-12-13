import React from 'react';
import styled from 'styled-components';

const Bar = styled.span`
  position: relative;
  display: block;
  width: 35rem;
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
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 1rem;
  transition: 0.2s ease all;
`;

const StyledSelect = styled.select`
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 35rem;
  padding: 1rem 1rem 1rem 0;
  font-size: 1.6rem;
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
      top: -2rem;
      transition: 0.2s ease all;
      font-size: 1.2rem;
      font-weight: ${({ theme }) => theme.medium};
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 35rem;
  &::after {
    position: absolute;
    top: 1.8rem;
    right: 1rem;
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
  width: 10rem;
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
