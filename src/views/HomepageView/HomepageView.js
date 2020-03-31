import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/organisms/Hero/Hero';
import Heading from '../../components/atoms/Heading/Heading';
import CategoryList from '../../components/organisms/CategoryList/CategoryList';

const StyledHero = styled.div`
  margin-bottom: 75px;
`;

const HomepageView = () => {
  return (
    <>
      <StyledHero>
        <Hero />
      </StyledHero>
      <Heading>Kategorie</Heading>
      <CategoryList />
    </>
  );
};

export default HomepageView;
