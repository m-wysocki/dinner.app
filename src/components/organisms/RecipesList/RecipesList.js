import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecipeCard from '../../molecules/RecipeCard/RecipeCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;

const RecipesList = ({ recipes }) => {
  return (
    <List>
      {recipes &&
        recipes.map(({ id, slug, name, image }) => (
          <RecipeCard key={id} id={id} slug={slug} img={image} name={name} />
        ))}
    </List>
  );
};

export default RecipesList;

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};
RecipesList.defaultProps = {
  recipes: null,
};
