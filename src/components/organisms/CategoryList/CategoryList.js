import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { StyledList } from './CategoryList.styled';
import useFetchItems from '../../../hooks/useFetchItems';

const CategoryList = ({ categories }) => {
  const recipes = useFetchItems('recipes');
  const filteredCategories =
    categories &&
    categories.filter(category => !!recipes.find(recipe => recipe.categoryId === category.id));

  return (
    <StyledList>
      {filteredCategories &&
        filteredCategories.map(category => <CategoryCard key={category.id} category={category} />)}
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
