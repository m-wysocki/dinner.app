import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import heroImage from '../../../assets/images/hero-img.png';
import { StyledHero, Content, ImageWrapper } from './HeroStyles';

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
