import styled from 'styled-components';

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3rem;
  @media (max-width: 1499px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${({ theme }) => theme.media.maxMobile} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;
