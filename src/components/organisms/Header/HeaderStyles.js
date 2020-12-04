import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;

  ${({ subpage }) =>
    subpage &&
    css`
      border-bottom: solid 2px #d8d8d8;
      padding-left: ${({ theme }) => theme.padding};
      padding-right: ${({ theme }) => theme.padding};
      margin-bottom: 10rem;
    `}
`;

export const MenuItem = styled.a`
  display: inline-block;
  margin-right: 2.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease-in-out;
  font-weight: ${({ theme }) => theme.light};
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.extra};
  }
`;
