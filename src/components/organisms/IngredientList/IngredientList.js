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

const IngredientList = ({ ingredients }) => {
  const ingredientsArray = Object.values(ingredients);
  const shopCategories = [];

  ingredientsArray.forEach(ingredient => {
    if (!shopCategories.includes(ingredient.shopCategory)) {
      shopCategories.push(ingredient.shopCategory);
    }
  });

  return (
    <IngredientsWrapper>
      <Heading small>Ingredient list</Heading>
      <Ingredients>
        {shopCategories.length > 0 &&
          shopCategories.map(shopCategory => (
            <IngredientsByCategory
              key={shopCategory}
              shopCategory={shopCategory}
              ingredients={ingredientsArray.filter(
                ingredient => ingredient.shopCategory === shopCategory,
              )}
            />
          ))}
      </Ingredients>
    </IngredientsWrapper>
  );
};

export default IngredientList;

IngredientList.propTypes = {
  ingredients: PropTypes.instanceOf(Object).isRequired,
};
