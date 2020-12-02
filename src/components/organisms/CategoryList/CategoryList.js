import React from 'react';
import styled from 'styled-components';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import useFetchItems from '../../../hooks/useFetchItems';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const CategoryList = () => {
  const categories = useFetchItems('categories');
  return (
    <StyledList>
      {categories &&
        categories.map(({ id, name, slug }) => (
          <CategoryCard key={id} id={id} slug={slug} name={name} />
        ))}
    </StyledList>
  );
};

export default CategoryList;
