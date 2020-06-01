import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
`;
export const Content = styled.div`
  max-width: 50%;
`;
export const ImageWrapper = styled.div`
  padding-right: 5%;
`;
