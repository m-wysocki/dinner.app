import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import IngredientsByCategory from '../../molecules/IngredientsByCategory/IngredientsByCategory';

const IngredientsWrapper = styled.div`
  margin-top: 10rem;
`;

const Ingredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
`;

const IngredientList = ({finalIngredientList}) => {
  return (
    <IngredientsWrapper>
      <Heading small>Ingredient list</Heading>

      <Ingredients>
        {finalIngredientList.map(ingredientsByCategory =>
          <IngredientsByCategory key={ingredientsByCategory[0]} ingredientsByCategory={ingredientsByCategory} />
          )}
      </Ingredients>
    </IngredientsWrapper>
  );
};

export default IngredientList;

IngredientList.propTypes = {
  finalIngredientList: PropTypes.instanceOf(Array).isRequired
};
