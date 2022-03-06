import styled from 'styled-components';

export const StyledHeading = styled.h2`
  @media ${({ theme }) => theme.media.maxMobile} {
    margin-bottom: 2rem;
  }
`;
