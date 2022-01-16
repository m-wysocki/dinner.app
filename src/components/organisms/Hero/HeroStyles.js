import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

export const StyledHero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  margin-bottom: 75px;

  ${Heading} {
    margin-top: 0;
  }

  @media ${({ theme }) => theme.media.maxMobile} {
    padding: 2rem;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  max-width: 40%;
  @media ${({ theme }) => theme.media.maxMobile} {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  padding-right: 5%;
`;
