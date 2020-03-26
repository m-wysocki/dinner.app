import styled, { css } from 'styled-components';

const Header = styled.h2`
  line-height: 1.5;
  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 30px;

  ${({ big }) =>
    big &&
    css`
      font-size: 4.2rem;
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: 2.8rem;
    `}
`;

export default Header;
