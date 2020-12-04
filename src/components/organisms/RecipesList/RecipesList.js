import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecipeCard from '../../molecules/RecipeCard/RecipeCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 9rem;
  align-items: stretch;
`;

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
