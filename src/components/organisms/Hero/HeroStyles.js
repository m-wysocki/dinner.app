import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
`;
export const Content = styled.div`
  max-width: 40%;
`;
export const ImageWrapper = styled.div`
  padding-right: 5%;
`;
