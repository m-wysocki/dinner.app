import styled, { css } from 'styled-components';

const InputError = styled.div`
  color: red;
  margin-bottom: 4rem;
  margin-top: -3.7rem;
  font-size: 1.2rem;
  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      bottom: -2rem;
      margin: 0;
      left: 0;
    `}
`;

export default InputError;
