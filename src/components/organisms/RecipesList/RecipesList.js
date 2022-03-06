import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../../molecules/RecipeCard/RecipeCard';
import { List } from './RecipeList.styled';

const RecipesList = ({ recipes }) => {
  return (
    <List>{recipes && recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}</List>
  );
};

export default RecipesList;

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};
RecipesList.defaultProps = {
  recipes: null,
};
