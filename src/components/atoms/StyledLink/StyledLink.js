import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.extra};
  }
`;

export default StyledLink;
