import styled from 'styled-components';

export const Inner = styled.span`
  -webkit-transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  height: 0.8rem;
  width: 0.8rem;
  transform: scale(0);
  transform-origin: center center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  opacity: 0;
`;
export const Outer = styled.span`
  height: 1.8rem;
  width: 1.8rem;
  border: 2px solid #039be5;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 1;

  &:hover ${Inner} {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.5;
  }
`;
export const Input = styled.input`
  height: 1px;
  width: 1px;
  opacity: 0;
  position: absolute;
  &:checked + ${Outer} ${Inner} {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  &:focus + ${Outer} ${Inner} {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.green};
  }
  &:checked + ${Outer} {
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;
