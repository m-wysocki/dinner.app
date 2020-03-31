import React from 'react';
import styled from 'styled-components';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const CategoryList = () => {
  return (
    <StyledList>
      <CategoryCard slug="#" name="Makarony" />
      <CategoryCard slug="#" name="Zupy" />
      <CategoryCard slug="#" name="Ryż" />
      <CategoryCard slug="#" name="Zapiekanki" />
      <CategoryCard slug="#" name="Burgery i kanapki" />
    </StyledList>
  );
};

export default CategoryList;
