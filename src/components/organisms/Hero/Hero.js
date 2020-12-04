import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import heroImage from '../../../assets/images/hero-img.png';
import { StyledHero, Content, ImageWrapper } from './HeroStyles';
import Logo from '../../atoms/Logo/Logo';

const Hero = () => {
  return (
    <StyledHero>
      <Content>
        <Heading big as="h1">
          welcome to <Logo inherit noHover />
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate, delectus
          distinctio doloribus exercitationem facilis fugiat iure minima optio perferendis quia
          quis, quisquam reiciendis suscipit!
        </p>
      </Content>
      <ImageWrapper>
        <img src={heroImage} alt="Warzywa" />
      </ImageWrapper>
    </StyledHero>
  );
};

export default Hero;
