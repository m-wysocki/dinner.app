import React from 'react';
import Hero from '../../components/organisms/Hero/Hero';
import Heading from '../../components/atoms/Heading/Heading';
import CategoryList from '../../components/organisms/CategoryList/CategoryList';
import HomepageTemplate from '../../templates/HomepageTemplate';
import useFetchItems from '../../hooks/useFetchItems';
import { StyledHeading } from './HomepageView.styled';

const HomepageView = () => {
  const categories = useFetchItems('categories');
  return (
    <HomepageTemplate>
      <Hero />
      <StyledHeading as={Heading} thin>
        categories
      </StyledHeading>
      <CategoryList categories={categories} />
    </HomepageTemplate>
  );
};

export default HomepageView;
