import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  align-items: stretch;

  @media (max-width: 1499px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.maxMobile} {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;
