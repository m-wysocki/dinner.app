import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;
export const InputLabel = styled.label`
  color: #999;
  font-size: 1.6rem;
  position: absolute;
  pointer-events: none;
  top: 1rem;
  transition: 0.2s ease all;
  width: 100%;
`;
export const InputBar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0px;
    position: absolute;
    bottom: 0.5px;
    background: green;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  & + ${InputLabel}:after {
    display: block;
    content: '';
    position: absolute;
    top: 6.5rem;
    opacity: 0;
    transition: 0.2s opacity ease-out, 0.2s color ease-out;
    -moz-transition: 0.2s opacity ease-out, 0.2s color ease-out;
    -webkit-transition: 0.2s opacity ease-out, 0.2s color ease-out;
  }
`;

export const StyledInput = styled.input`
  color: #333;
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 0;
  position: relative;
  display: block;
  border: none;
  width: 100%;
  border-bottom: 1px solid #d5d5d5;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus + ${InputLabel}, &:not(:placeholder-shown) ~ ${InputLabel} {
    top: -1.5rem;
    font-size: 1.2rem;
    color: #039be5;
    font-weight: ${({ theme }) => theme.medium};
  }
  &:focus ~ ${InputBar}, &:not(:placeholder-shown) ~ ${InputBar} {
    &:before,
    &:after {
      width: 50%;
      background: #4cb8ed;
      border-bottom: 0px;
    }
  }

  &:invalid + ${InputLabel} {
    color: #c70000;
  }
  &:invalid ~ ${InputBar} {
    &:before,
    &:after {
      background: #c70000;
    }
  }
`;
