import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  padding-top: 10rem;
  position: relative;
`;

export const Info = styled.div`
  margin-bottom: 6rem;
  ${Heading} {
    margin-top: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10rem;
  position: absolute;
  right: 0;
  top: 0;
  ${Button} {
    margin-left: 1.5rem;
    background-color: transparent;
  }
`;
