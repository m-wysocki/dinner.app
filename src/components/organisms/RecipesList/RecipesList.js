import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecipeCard from '../../molecules/RecipeCard/RecipeCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  align-items: stretch;
  @media (max-width: 1499px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
