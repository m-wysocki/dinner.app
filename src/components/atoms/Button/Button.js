import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.text};
  color: #fff;
  font-weight: ${({ theme }) => theme.light};
  font-size: 1.8rem;
  padding: 1.5rem 3.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: none;
  border: none;
  letter-spacing: 1px;
  outline: none;
  position: relative;
  line-height: 1;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.extra};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      border: solid 2px ${({ theme }) => theme.colors.grey};
      background-color: #fff;
      color: ${({ theme }) => theme.colors.text};
      transition: border 0.3s ease-in-out;
      &:hover {
        border: solid 2px ${({ theme }) => theme.colors.text};
        background-color: #fff;
      }
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: 1.3rem;
      padding: 1rem 2rem;
    `}
  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.colors.extra};
      &:hover {
        border: solid 2px ${({ theme }) => theme.colors.extra};
      }
    `}
    ${({ add }) =>
      add &&
      css`
        &:hover {
          border: solid 2px ${({ theme }) => theme.colors.green};
        }
      `}
`;

export default Button;
