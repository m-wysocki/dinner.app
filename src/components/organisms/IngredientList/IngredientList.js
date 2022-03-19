import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading/Heading';
import IngredientsByCategory from '../../molecules/IngredientsByCategory/IngredientsByCategory';
import { Ingredients } from './IngredientList.styled';

const IngredientList = ({ ingredients }) => {
  const ingredientsArray = Object.values(ingredients);
  const shopCategories = [];

  ingredientsArray.forEach(ingredient => {
    if (!shopCategories.includes(ingredient.shopCategory)) {
      shopCategories.push(ingredient.shopCategory);
    }
  });

  return (
    <div>
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
    </div>
  );
};

export default IngredientList;

IngredientList.propTypes = {
  ingredients: PropTypes.instanceOf(Object).isRequired,
};
