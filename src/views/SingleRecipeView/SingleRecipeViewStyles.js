import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  padding-top: 10rem;
  position: relative;

  @media ${({ theme }) => theme.media.maxMobile} {
    grid-template-columns: 1fr;
    padding-top: 30px;
    grid-gap: 30px;

    ul li {
      font-size: 14px;
    }
  }
`;

export const Image = styled.img`
  @media ${({ theme }) => theme.media.maxMobile} {
    max-width: 400px;
    justify-self: center;
    width: 100%;
  }
`;

export const Info = styled.div`
  margin-bottom: 6rem;
  ${Heading} {
    margin-top: 0;
  }

  @media ${({ theme }) => theme.media.maxMobile} {
    margin-top: 30px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10rem;
  position: absolute;
  right: 0;
  top: 2rem;
  ${Button} {
    margin-left: 1.5rem;
    background-color: transparent;

    @media ${({ theme }) => theme.media.maxMobile} {
      border-width: 1px;
      margin: 5px;
    }
  }

  @media ${({ theme }) => theme.media.maxMobile} {
    position: static;
    padding-right: 0;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 0;
    justify-content: flex-start;
  }
`;
