import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/organisms/Hero/Hero';
import Heading from '../../components/atoms/Heading/Heading';
import CategoryList from '../../components/organisms/CategoryList/CategoryList';
import HomepageTemplate from '../../templates/HomepageTemplate';
import useFetchItems from '../../hooks/useFetchItems';

const StyledHero = styled.div`
  margin-bottom: 75px;
`;

const HomepageView = () => {
  const categories = useFetchItems('categories');
  return (
    <HomepageTemplate>
      <StyledHero>
        <Hero />
      </StyledHero>
      <Heading thin>categories</Heading>
      <CategoryList categories={categories} />
    </HomepageTemplate>
  );
};

export default HomepageView;
