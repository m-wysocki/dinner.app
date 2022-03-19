import styled from 'styled-components';

export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;

  @media ${({ theme }) => theme.media.maxMobile} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
