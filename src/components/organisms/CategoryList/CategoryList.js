import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3rem;
  @media (max-width: 1499px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CategoryList = ({ categories }) => {
  return (
    <StyledList>
      {categories &&
        categories.map(category => <CategoryCard key={category.id} category={category} />)}
    </StyledList>
  );
};

export default CategoryList;

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};
CategoryList.defaultProps = {
  categories: null,
};
