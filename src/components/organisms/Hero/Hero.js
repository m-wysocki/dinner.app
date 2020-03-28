import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import heroImage from '../../../assets/images/hero-img.png';

const StyledHero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
`;
const Content = styled.div`
  max-width: 50%;
`;
const ImageWrapper = styled.div`
  padding-right: 5%;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Content>
        <Heading big as="h1">
          Witaj w aplikcji przepisowo-zakupowej!
        </Heading>
        <Heading small>
          Dzięki niej na podstawie dodanych przpisów możesz wygenerować listę zakupów
        </Heading>
      </Content>
      <ImageWrapper>
        <img src={heroImage} alt="Warzywa" />
      </ImageWrapper>
    </StyledHero>
  );
};

export default Hero;
