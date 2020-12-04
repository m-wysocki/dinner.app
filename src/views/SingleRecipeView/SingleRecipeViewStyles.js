import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  margin-top: 10rem;
`;

export const Info = styled.div`
  margin-bottom: 6rem;
  ${Heading} {
    margin-top: 0;
  }
`;
