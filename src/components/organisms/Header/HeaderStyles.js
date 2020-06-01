import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MenuItem = styled.a`
  display: inline-block;
  margin-right: 10px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in-out;
  font-weight: ${({ theme }) => theme.bold};
  &:hover {
    color: ${({ theme }) => theme.colors.salmon};
  }
`;
